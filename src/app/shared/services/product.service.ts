import { Product, ProductAll } from '../../../app/shared/models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/store/products`);
  }

  getAll(): Observable<ProductAll[]> {
    return this.http.get<ProductAll[]>(`${environment.baseUrl}/store/products`);
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}/store/product/${productId}`);
  }

}
