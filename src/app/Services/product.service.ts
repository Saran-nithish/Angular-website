import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private Url = 'https://fakestoreapi.com/products';

  constructor(private http:HttpClient) { }

  GetProducts():Observable<any[]>{
    return this.http.get<any[]>(this.Url)
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(this.Url+"/"+id);
  }
}


