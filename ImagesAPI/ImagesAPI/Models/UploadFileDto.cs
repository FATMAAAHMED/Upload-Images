namespace ImagesAPI.Models
{
    public class UploadFileDto
    {
        public bool IsSuccess {  get; set; }
        public string Message{ get; set; }
        public string URL { get; set; }
        public UploadFileDto( bool isSuccess, string messge , string uRL="")
        {
            IsSuccess = isSuccess; 
            Message = messge;

            URL = uRL;
            
        }
    }
}
