import { Component, OnInit, Input } from '@angular/core';
import { Fuel } from 'src/app/enums/fuel';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car :Car = {
    id: 0,
    title: '',
    address: '',
    brand: '',
    model: '',
    model_year: 0,
    issuance: "",
    mileage: 0,
    fuel: Fuel.diesel,
    color: '',
    numbers_doors: 0,
    horse_power: 0,
    price: 0,
    pictures: [],
    sold: false
  }

  mainPicture: string = "";

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.mainPicture = this.car.pictures[0];
  }

  changePictureVue($event: { type: string; }){
    this.mainPicture = $event.type == 'mouseover' ? this.car.pictures[1] : this.car.pictures[0]
  }

  deleteCar(id :number){
    this.carService.deleteCarById(id).subscribe({
      next: () => {},
      error: err => {console.error(err)},
      complete: () => {this.reloadPage()}
    })
  }

  reloadPage(): void {
    window.location.reload();
  }

}
