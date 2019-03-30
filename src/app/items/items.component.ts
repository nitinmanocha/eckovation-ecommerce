import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { products } from '../demoitem';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

 items = products;
  selectedItem: Item;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(item: Item): void {
    this.selectedItem = item;
	}

}
