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


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Blog.Controllers
{
    [Route("api/[controller]")]
    public class FileHandlerController : Controller
    {
        private readonly IHostingEnvironment _hostingEnv;
        private readonly IMediaFileManager _fileManager;

        public FileHandlerController(IHostingEnvironment hostingEnv, IMediaFileManager fileManager)
        {
            _hostingEnv = hostingEnv;
            _fileManager = fileManager;
        }


        [HttpPost]
        public JsonResult UploadFiles()
        {
            var files = Request.Form.Files;

            var uplodedFiles = new List<Blog.Data.Entity.MediaFile>();
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



                    uplodedFiles.Add(new Blog.Data.Entity.MediaFile
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

            _fileManager.AddFile(uplodedFiles);

            var resUploadFiles = uplodedFiles.Select(file => new FileViewModel
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
                    Blog.Data.Entity.MediaFile file = await _fileManager.FindAsync(id);
                    var filePath = $@"{_hostingEnv.WebRootPath}\{file.Path}";
                    return new PhysicalFileResult(filePath, file.ContentType);
                }
                else
                {
                    IEnumerable<Blog.Data.Entity.MediaFile> file = await _fileManager.FindAsync(fileName);
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
