import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fuel } from 'src/app/enums/fuel';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  constructor(private carService: CarService, private route: Router) { }

  title = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  brand = new FormControl('', [Validators.required]);
  model = new FormControl('', [Validators.required]);
  model_year = new FormControl('', [Validators.required]);
  issuance = new FormControl('', [Validators.required]);
  mileage = new FormControl('', [Validators.required]);
  fuel = new FormControl('', [Validators.required]);
  color = new FormControl('', [Validators.required]);
  numbers_doors = new FormControl('', [Validators.required]);
  horse_power = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  pictures = new FormControl('');
  sold = new FormControl(true);

  addCar = new FormGroup ({
    title: this.title,
    address: this.address,
    brand: this.brand,
    model: this.model,
    model_year: this.model_year,
    issuance: this.issuance,
    mileage: this.mileage,
    fuel: this.fuel,
    color: this.color,
    numbers_doors: this.numbers_doors,
    horse_power: this.horse_power,
    price: this.price,
    pictures: this.pictures,
    sold: this.sold
  })

  sendCarForm(car: Car){
    car.pictures = this.pictures.value.split(", ")
    this.carService.createCar(car).subscribe({
      next: (res) => {
        console.log(res);
        //this.submitted = true;
      },
      error: (e) => console.error(e),
      complete: () => {this.route.navigate([""]);}
    })
  }



  ngOnInit(): void {
  }

  keys() : Array<string> {
    var keys = Object.keys(Fuel);
    return keys.slice(keys.length / 2);
  }

}
