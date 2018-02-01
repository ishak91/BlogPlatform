using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Net.Http.Headers;
using System.IO;
using Blog.Common.ViewModel;
using Blog.Core.Business;
using Blog.Common.DTO;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Blog.Controllers
{
    [Route("api/file")]
    public class FileHandlerApiController : Controller
    {
        private readonly IHostingEnvironment _hostingEnv;
        private readonly IMediaFileManager _fileManager;

        public FileHandlerApiController(IHostingEnvironment hostingEnv, IMediaFileManager fileManager)
        {
            _hostingEnv = hostingEnv;
            _fileManager = fileManager;
        }


        [HttpPost]
        public JsonResult UploadFiles()
        {
            var files = Request.Form.Files;

            var uplodedFiles = new List<MediaFileDto>();
            long size = 0;
            foreach (var file in files)
            {
                var fileExt = file.FileName.Substring(file.FileName.Trim().LastIndexOf('.'));
                var filename = file.FileName.Remove(file.FileName.Trim().LastIndexOf('.')).Trim().Replace(' ', '_');

                filename = $@"{filename}_{new Random().Next(1000, 9999)}_{DateTime.Now.ToString("dd_MM_yyyy_HH_MM_ss")}{fileExt}";

                var location = _hostingEnv.WebRootPath + @"\MediaFiles";

                if (!Directory.Exists(location))
                {
                    Directory.CreateDirectory(location);
                }



                location += $@"\{filename}";
                size += file.Length;

                using (FileStream fs = System.IO.File.Create(location))
                {
                    var fileType = "";
                    var contentType = file.ContentType.ToLowerInvariant();

                    if (contentType.Contains("image"))
                        fileType = "Image";
                    else if (contentType.Contains("audio"))
                        fileType = "Audio";
                    else if (contentType.Contains("video"))
                        fileType = "Video";
                    else if (contentType.Contains("pdf"))
                        fileType = "PDF";
                    else if (contentType.Contains("msword") || contentType.Contains("wordprocessingml"))
                        fileType = "Word";
                    else if (contentType.Contains("spreadsheetml") || contentType.Contains("ms-excel"))
                        fileType = "Excel";
                    else if (contentType.Contains("presentationml"))
                        fileType = "PowerPoint";



                    uplodedFiles.Add(new MediaFileDto
                    {
                        FileName = filename,
                        Path = $@"MediaFiles\{filename}",
                        Size = file.Length,
                        FileType = fileType,
                        ContentType = file.ContentType
                    });


                    file.CopyTo(fs);
                    fs.Flush();
                }
            }
            var message = $"{files.Count} file(s) /{ size} bytes uploaded successfully!";

            var dbFiles= _fileManager.AddFile(uplodedFiles);

            var resUploadFiles = dbFiles.Select(file => new FileViewModel
            {
                Id = file.Id,
                FileName = file.FileName,
                Path = file.Path,
                FileType = file.FileType,
                Size = file.Size
            });

            var response = new
            {
                message,
                files = resUploadFiles
            };
            return Json(response);
        }

        [HttpGet("{id}/{fileName}")]
        public async Task<PhysicalFileResult> GetFile(int id, string fileName)
        {
            try
            {

                if (id != 0)
                {
                    MediaFileDto file = await _fileManager.GetAsync(id);
                    var filePath = $@"{_hostingEnv.WebRootPath}\{file.Path}";
                    return new PhysicalFileResult(filePath, file.ContentType);
                }
                else
                {
                    IEnumerable<MediaFileDto> file = await _fileManager.GetAsync(fileName);
                    var filePath = $@"{_hostingEnv.WebRootPath}\{file.FirstOrDefault().Path}";
                    return new PhysicalFileResult(filePath, file.FirstOrDefault().ContentType);
                }


            }
            catch (Exception)
            {

                throw;
            }

        }

    }
}
