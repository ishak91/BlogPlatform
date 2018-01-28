using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Blog.Data.Entity;
using Blog.Common.ViewModel;
using Blog.Core.Business;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Blog.Controllers
{
    [Route("api/[controller]")]
    public class MediaController : Controller
    {
        private readonly IMediaManager _fileManager;

        public MediaController(IMediaManager fileManager)
        {
            _fileManager = fileManager;
        }

        // GET: api/values
        [HttpGet]
        public async Task<JsonResult> Get()
        {
            IEnumerable<MediaFile> files = await _fileManager.GetAllAsync();

            var filesVm = from file in files
                          select new FileViewModel
                          {
                              Id = file.Id,
                              FileName = file.FileName,
                              FileType = file.FileType
                          };

            return Json(filesVm);
        }

        // GET api/values/5
        [HttpGet("{filterType}/{filterValue}")]
        public async Task<IActionResult> Get(string filterType,string filterValue)
        {
            var files = new List<FileViewModel>();
            if (filterType.ToLowerInvariant().Contains("id") && int.Parse(filterValue) > 0)
            {
                var file = await _fileManager.FindAsync(int.Parse(filterValue));
                files.Add(new FileViewModel { FileName = file.FileName, Id = file.Id });

                return Json(files.FirstOrDefault());
            }
            else if (filterType.ToLowerInvariant().Contains("filename"))
            {
                IEnumerable<MediaFile> mediaFiles = await _fileManager.FindAsync(filterValue);
                files = mediaFiles.Select(f => new FileViewModel { FileName = f.FileName, Id = f.Id }).ToList();
            }
            else if (filterType.ToLowerInvariant().Contains("filetype"))
            {
                IEnumerable<MediaFile> mediaFiles = await _fileManager.FilterByFileTypeAsync(filterValue);
                files = mediaFiles.Select(f => new FileViewModel { FileName = f.FileName, Id = f.Id }).ToList();
            }

         
            return Json(files);
        }
      
        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<OkResult> Delete(int id)
        {

            MediaFile file = await _fileManager.FindAsync(id);

            _fileManager.RemoveFile(file);

            return Ok();
        }

        [HttpPost]
        public  OkResult Delete(IEnumerable<int> ids)
        {
            var deleteFiles = new List<MediaFile>();

            foreach (var id in ids)
            {
                MediaFile file =  _fileManager.Find(id);
                deleteFiles.Add(file);
            }

            _fileManager.RemoveFile(deleteFiles);

            return Ok();
        }

      
    }
}
