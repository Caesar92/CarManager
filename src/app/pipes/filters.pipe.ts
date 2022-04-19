import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/car';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(values: Car[], filterOn: string, order: string): Car[] {
    switch (filterOn) {
      case "price":
        if (order === 'DESC') {
          return values.sort((a: Car, b: Car) => b.price - a.price);
        } else {
          return values.sort((a: Car, b: Car) => a.price - b.price);
        }

      case "issuance":
        if (order === 'DESC') {
          return values.sort((a: Car, b: Car) => new Date(b.issuance).getTime() - new Date(a.issuance).getTime());
        } else {
          return values.sort((a: Car, b: Car) => new Date(a.issuance).getTime() - new Date(b.issuance).getTime());
        }

      default:
        return values.sort((a: Car, b: Car) => a.id - b.id);

    }

  }

}
