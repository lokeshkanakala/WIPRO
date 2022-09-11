import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { InitialComponent } from './initial/initial.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { Task5Component } from './task5/task5.component';
import { Task6Component } from './task6/task6.component';
import { UitoolsComponent } from './uitools/uitools.component';

const routes: Routes = [
  {
    path: "initial",
    component:InitialComponent
  },
  {
    path: "database",
    component:DatabaseComponent
  },
  {
    path: "ui-tools",
    component:UitoolsComponent
  },
  {
    path: "task2",
    component:Task2Component
  },
  {
    path: "task3",
    component:Task3Component
  },
  {
    path: "task4",
    component:Task4Component
  },
  {
    path: "task5",
    component:Task5Component
  },
  {
    path: "task6",
    component:Task6Component
  },
  {
    path: "",
    redirectTo: "initial",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
