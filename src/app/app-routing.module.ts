import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './components/cars/cars.component';

import { CreateCarComponent } from './components/car/create-car/create-car.component';
import { ReadCarComponent } from './components/car/read-car/read-car.component';
import { UpdateCarComponent } from './components/car/update-car/update-car.component';

const routes: Routes = [
  {path:"", component:CarsComponent},
  {path:":id", component:ReadCarComponent},
  {path:"create", component:CreateCarComponent},
  {path:"update/:id", component:UpdateCarComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
