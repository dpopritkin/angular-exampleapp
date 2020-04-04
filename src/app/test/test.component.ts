import { Component, OnInit } from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
name: string = '';
select;
products = products;

setValue() { this.name = 'Nancy'; }
getProduct(){
  return this.select.description;
}

  constructor() { }

  ngOnInit() {
  }

}