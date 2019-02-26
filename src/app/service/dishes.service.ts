import { Injectable } from '@angular/core';
import { Dishes } from 'src/assets/data/dishes.interface';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  private favoriteDishes: Dishes[] = [];
  constructor() { }
  addDishToFavorite(dish: Dishes) {
    this.favoriteDishes.push (dish);
    console.log(this.favoriteDishes);
  }
  removeDishFromFavorite(dish: Dishes) {
    const position = this.favoriteDishes.findIndex((dishE1: Dishes) => {
      return dishE1.id === dish.id;
    });
    this.favoriteDishes.splice(position, 1);
  }
  getFavoriteDish() {
    return this.favoriteDishes.slice();
  }
  isDishFavorite(dish: Dishes) {
    return this.favoriteDishes.find((dishE1: Dishes) => {
      return dishE1.id === dish.id;
    });
  }
}
