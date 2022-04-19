import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber, tap } from 'rxjs';
import { Fuel } from 'src/app/enums/fuel';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  form!: FormGroup;
  updateCar!: Observable<Car>;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      brand: new FormControl("", [Validators.required]),
      model: new FormControl("", [Validators.required]),
      model_year: new FormControl("", [Validators.required]),
      issuance:new FormControl("", [Validators.required]),
      mileage: new FormControl("", [Validators.required]),
      fuel: new FormControl("", [Validators.required]),
      color: new FormControl("", [Validators.required]),
      numbers_doors: new FormControl("", [Validators.required]),
      horse_power: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      pictures: new FormControl("", [Validators.required]),
      sold:new FormControl("", [Validators.required])
    });

    const carId = this.route.snapshot.paramMap.get('id')!;
    this.updateCar = this.carService.getCarById(+carId).pipe(
      tap(updateCar => {
        this.form.patchValue(updateCar);
    }));

  }

  sendCarForm(car: Car) {
    car.id = +this.route.snapshot.paramMap.get('id')!;
    this.carService.updateCar(car).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
      complete: () => { this.router.navigate([""]); }
    })
  }

  keys(): Array<string> {
    var keys = Object.keys(Fuel);
    return keys.slice(keys.length / 2);
  }

}
