import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.scss']
})
export class Task6Component implements OnInit {

  training_details: any[] = [
    {
      training_request_no: 536655373,
      tarining_name: "dot net",
      training_mode: "online",
      duration: "2 Hrs"
    },
    {
      training_request_no: 536387674,
      tarining_name: "dot net core",
      training_mode: "online",
      duration: "6 Hrs"
    },
    {
      training_request_no: 536458973,
      tarining_name: "angular",
      training_mode: "online",
      duration: "10 Hrs"
    },
    {
      training_request_no: 53637333,
      tarining_name: "sql",
      training_mode: "online",
      duration: "5 Hrs"
    },
    {
      training_request_no: 5363776763,
      tarining_name: "dot net MVC",
      training_mode: "online",
      duration: "2 Hrs"
    },
    {
      training_request_no: 5363767763,
      tarining_name: "java",
      training_mode: "online",
      duration: "12 Hrs"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
