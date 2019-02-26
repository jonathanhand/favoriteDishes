import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.page.html',
  styleUrls: ['./dishdetail.page.scss'],
})
export class DishdetailPage implements OnInit {
  item: string;
  desc: string;
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams) { }
  ionViewDidLoad() {
    this.item = this.navParams.get('item');
    this.desc = this.navParams.get('desc');
  }
  onClose(remove = false) {
    this.modalCtrl.dismiss(remove);
  }
  ngOnInit() {
  }

}
