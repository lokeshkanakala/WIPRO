import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component implements OnInit {

  players_list :string[]= ["Dhoni", "virat", "Rohit",
    "Sevag", "Sachin", "Jadeja",
    "Hardik Pandya", "Yuvraj Singh", "Jasprit Bumrah",
    "Ambati Rayudu", "Raina", "KL Rahul",
    "Rishabh Pant", "Bhuvneshwar Kumar","Kuldeep Yadav"]

  constructor() { }

  ngOnInit(): void {
  }




  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.players_list, event.previousIndex, event.currentIndex);
  }


}
