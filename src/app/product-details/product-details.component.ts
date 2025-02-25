import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.getProduct(+id).subscribe(response => {
        this.product = response;
      });
    } 
    }
}



