import { Component } from '@angular/core';
import { Dishes } from 'src/assets/data/dishes.interface';
import { DishesService } from '../service/dishes.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dishes: Dishes[];
  constructor (private dishService: DishesService) {}
  ionViewWillEnter() {
    this.dishes = this.dishService.getFavoriteDish();
  }
}
