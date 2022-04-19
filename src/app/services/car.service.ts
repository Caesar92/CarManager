import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car';

const BASE_URL = "http://localhost:3000/cars"

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]>{
    return this.http.get<Car[]>(BASE_URL);
  }

  getCarById(id: number): Observable<Car>{
    console.log(BASE_URL + `/${id}`)
    return this.http.get<Car>(BASE_URL + `/${id}`);
  }

  updateCar(car :Car ) :Observable<Car>{
    return this.http.put<Car>(`${BASE_URL}/${car.id}`, car);
  }

  createCar(car :Car ) :Observable<Car>{
    return this.http.post<Car>(`${BASE_URL}`, car);
  }

  deleteCarById(id: number): Observable<Car>{
    return this.http.delete<Car>(BASE_URL + `/${id}`);
  }

  searchBytitleAndPrice(word: string, min: number, max: number) :Observable<Car[]>{
    console.log(word)
    return this.http.get<Car[]>(BASE_URL + `?title_like=${word}&price_gte=${min}&price_lte=${max}`);
  }
}
