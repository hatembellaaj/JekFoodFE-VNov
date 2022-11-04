import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }
 
  getAll() {
    return this.http.get<Restaurant[]>('http://localhost:8080/restaurant');
  }

  
  }

