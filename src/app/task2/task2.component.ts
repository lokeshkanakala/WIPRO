import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {
  string_varible: string = "";

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
  sort_type: "asc" | "dsc" = "asc";
  greeting: Promise<number> | null = null;

  arrived: boolean = false;
  private resolve: Function | null = null;

  constructor() { }

  ngOnInit(): void {
    this.sort_the_data("asc");
    this.get_data();
  }

  sort_the_data(type: "asc" | "dsc") {
    this.sort_type = type
    if (type == "asc") {
      this.training_details = this.training_details.sort((a: any, b: any) => a['tarining_name'] > b['tarining_name'] ? 1 : -1)
    } else if (type == "dsc") {
      this.training_details = this.training_details.sort((a: any, b: any) => a['tarining_name'] < b['tarining_name'] ? 1 : -1)
    }
  }

  get_data() {
    this.arrived = false;
    let min = 1
    let max = 100
    this.greeting = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        this.resolve!(Math.floor(Math.random() * (max - min) + min));
        this.arrived = true
      }, 2000)
      this.resolve = resolve;
    });
  }


}
