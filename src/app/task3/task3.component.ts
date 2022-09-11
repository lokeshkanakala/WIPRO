import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {

  aiNumbers:any[]=[]

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10000; i++){
      this.aiNumbers.push({
        name:"Name - "+(i+1)
      })
    }
  }

}
