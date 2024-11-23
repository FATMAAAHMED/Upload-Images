using ImagesAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ImagesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        [HttpPost]
        public ActionResult<UploadFileDto> UPload([FromForm] IFormFile file) 
        {
            #region check extension 
            //better  to be part of appsetting.json
            var allowedExtensions = new string[] 
            {
            ".png",
            ".jpg",
            ".svg"
            };
            var extesion = Path.GetExtension(file.FileName);
            bool IsExtensionAllowed = allowedExtensions.Contains(extesion, StringComparer.InvariantCultureIgnoreCase);
            if (!IsExtensionAllowed)
            {
                return BadRequest(new UploadFileDto(false, "extension not valid"));
            
            }
            #endregion

            #region check lenth

            bool isAllowedSize = file.Length is > 0 and <= 4_000_000;
            if (!isAllowedSize) 
            {
                return BadRequest(new UploadFileDto(false, "size not allowed"));
            }

            #endregion

            #region sorage image
            var newFileName = $"{Guid.NewGuid()}{extesion}";
            var imagePath = Path.Combine(Environment.CurrentDirectory , "Images") ;
            var fullFilePath = Path.Combine(imagePath, newFileName);
            using var stream = new FileStream(fullFilePath, FileMode.Create);
            file.CopyTo(stream);
            #endregion
            #region generate URL
            var url=$"{Request.Scheme}://{Request.Host}/Images/{newFileName}";
            #endregion 

            return new UploadFileDto(true, "success", url);

        }
    }
}
