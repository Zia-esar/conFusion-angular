import { Injectable } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // getDishes(): Promise<Dish[]>{
  //   return Promise.resolve(DISHES);
  // }

  // getDish(id: any): Observable<Dish>{
  //   return of(DISHES.filter((dish) => dish.id = id)[0]);
  // }

  getFeaturedDish(): Observable<Dish>{
    return of(DISHES.filter(dish => dish.featured)[0]);
  }

  getDishes(): Observable<Dish[]>{
    return of(DISHES).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any >{
    return of(DISHES.map(dish => dish.id));
  }

  getDish(id: any): Promise<Dish>{
    return new Promise(resolve => {
      setTimeout(()=> resolve(DISHES.filter(dish => dish.id === id)[0]), 2000);
    });
  }

  addComment(comment){
    debugger
    DISHES[0].comments.push(comment);
  }


  // getFeaturedDish(): Promise<Dish> {
  //   return new Promise (resolve => {
  //     setTimeout(() => resolve(DISHES.filter(dish => dish.featured)[0]), 2000);
  //   });
  // }

}
