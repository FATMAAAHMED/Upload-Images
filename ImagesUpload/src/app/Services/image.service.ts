import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFileDto } from '../Models/upload-file-dto';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient:HttpClient) { }
  public upload(file:File):Observable<UploadFileDto>{
    var form = new FormData();
    form.append("file",file);
   return  this.httpClient.post<UploadFileDto>("https://localhost:7189/api/Files",form);

  }
}
