import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('sliderlist') sliderlist: IonList;

  constructor() { }

  ngOnInit() {
  }

  async closeSlidingItems(){
    await this.sliderlist.closeSlidingItems();
  }

}