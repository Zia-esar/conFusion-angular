import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService) { }



  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);
    //this.promotion = this.promotionservice.getFeaturedPromotion();
    this.promotionservice.getFeaturedPromotion().then(promo => this.promotion = promo);
    // this.leader = this.leaderService.getLeader();
    this.leaderService.getLeader().then(leader => this.leader = leader);
    //this.leaderService.getLeader().then(leader => this.corLeader = leader);
  }
}
