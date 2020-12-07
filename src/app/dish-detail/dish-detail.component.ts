import { Component, OnInit, Input } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {


  dish: Dish;


  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    // this.dish = this.DISH;
    const id = this.route.snapshot.params.id;
    this.dish = this.dishService.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }

}
