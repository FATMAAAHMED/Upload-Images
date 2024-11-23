import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './../../Services/image.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { File } from 'buffer';

@Component({
  selector: 'app-add-product-image',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './add-product-image.component.html',
  styleUrl: './add-product-image.component.css'
})
export class AddProductImageComponent {
imageUrl='';
 file:any
form=new FormGroup({

    name:new FormControl<string>(""),
    quantity:new FormControl<number>(0),
    image: new FormControl<string>("")
   // fileimg:new FormControl<File|null>(null)

})
constructor(private mageService:ImageService) {


}
uploadImage(event:Event){
var input = event.target as HTMLInputElement;
this.file= input.files?.[0];
// if (!file) return;
// this.mageService.upload(file).subscribe(res=>{

//   this.imageUrl=res.url;
// //assigning image value in the form from the code
//   this.form.patchValue({image:this.imageUrl})

// })
}

addproduct(event:Event){
  event.preventDefault();
  if(this.file){
    this.mageService.upload(this.file).subscribe(res=>{

      this.imageUrl=res.url;
    //assigning image value in the form from the code
      this.form.patchValue({image:this.imageUrl})
      console.log(this.form.value);

    })

  }




}
}
