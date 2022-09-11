import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss']
})
export class Task5Component implements OnInit {
  color_selected: any ="#40c480"

  constructor() { }

  ngOnInit(): void {
  }

  get_color() {
    console.log(this.color_selected)
  }

}
