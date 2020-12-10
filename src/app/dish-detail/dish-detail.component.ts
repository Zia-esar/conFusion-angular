import { Component, OnInit, Input } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {


  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  userName: string='';
  userComment: string = '';


  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id']))).
    subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id); });  }

  setPrevNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  addComment(){
    let obj ={
      rating: 10,
      comment: 'ssdjfsdfjjsdf',
      author: 'fjhhds',
      date: '2014-09-05T17:57:28.556094Z'
  }
    this.dishService.addComment(obj)
  }

}
