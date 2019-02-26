import { Component } from '@angular/core';
import { Dishes } from 'src/assets/data/dishes.interface';
import { DishesService } from '../service/dishes.service';
import { ModalController } from '@ionic/angular';
import { DishdetailPage } from '../dishdetail/dishdetail.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dishes: Dishes[];
  constructor (private dishService: DishesService,
    private modalCtrl: ModalController) {}
  ionViewWillEnter() {
    this.dishes = this.dishService.getFavoriteDish();
  }
  async onViewDish(dish: Dishes) {
    const modal = await this.modalCtrl.create({
      component: DishdetailPage, componentProps: dish
    });
    await modal.present();
    modal.onDidDismiss().then((remove: any) => {
      if (remove.data) {
        this.onRemoveFromFavorite(dish);
      }
    });
    }
    onRemoveFromFavorite(dish: Dishes) {
      this.dishService.removeDishFromFavorite(dish);
      this.dishes = this.dishService.getFavoriteDish();
  }
}
