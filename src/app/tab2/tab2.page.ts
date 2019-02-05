import { Component, OnInit} from '@angular/core';
import { Dishes } from 'src/assets/data/dishes.interface';
import dishes from 'src/assets/data/dishes';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  dishCollection: {category: string, dishes: Dishes[]}[];
  ngOnInit() {
    this.dishCollection = dishes;
  }
}
