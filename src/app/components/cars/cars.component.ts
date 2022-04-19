import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Fuel } from 'src/app/enums/fuel';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  fuels = Fuel;
  garage: Car[] = [];
  filterOn: string = "NONE";
  order: string = "NONE";
  searchWord = new FormControl('');
  minPrice = new FormControl(''); // 0
  maxPrice = new FormControl(''); // 1000000000

  filterCars = new FormGroup({
    searchWord: this.searchWord,
    minPrice: this.minPrice,
    maxPrice: this.maxPrice
  })


  constructor(private carService: CarService) { }

  ngOnInit(): void {
    console.log(Fuel)
    this.carService.getAllCars().subscribe({
      next: data => {this.garage = data},
      error: err => {console.error(err)},
      complete: () => {}
    });
  }

  keys() : Array<string> {
    var keys = Object.keys(this.fuels);
    return keys.slice(keys.length / 2);
  } 

  changePriceFilter(on :string, mode: string){
    this.filterOn = on
    this.order = mode;
  }

  sendFilterForm(form: any){

    form['minPrice'].value = form['minPrice'].value == "" ? 0 : form['minPrice'].value
    form['maxPrice'].value = form['maxPrice'].value == "" ? 1000000000 : form['maxPrice'].value

    this.carService.searchBytitleAndPrice(
      form['searchWord'].value,
      form['minPrice'].value,
      form['maxPrice'].value
    ).subscribe({
      next: data => {this.garage = data; console.log(data)},
      error: err => {console.log(err)},
      complete: () => {}
    })
  }

}
