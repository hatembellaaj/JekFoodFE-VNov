import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Food[]>('http://localhost:8080/plates');
  }
  
}

