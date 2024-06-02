import { Component,OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.GetProducts().subscribe(response => {
      this.products = response;
    });
  }

}





