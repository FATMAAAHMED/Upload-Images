import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProductImageComponent } from "./Components/add-product-image/add-product-image.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [//RouterOutlet,
    AddProductImageComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ImagesUpload';
}
