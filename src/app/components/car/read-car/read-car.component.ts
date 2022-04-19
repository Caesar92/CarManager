import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-read-car',
  templateUrl: './read-car.component.html',
  styleUrls: ['./read-car.component.css']
})
export class ReadCarComponent implements OnInit {

  showCar !:Car;

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id')!;
    this.carService.getCarById(+carId).subscribe({
      next:data => {this.showCar = data},
      error: err => {console.log(err)}
    })

  }

}
