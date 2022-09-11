import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DatabaseComponent } from './database/database.component';
import { UitoolsComponent } from './uitools/uitools.component';
import { InitialComponent } from './initial/initial.component';
import { Task2Component } from './task2/task2.component';
import { FormsModule } from '@angular/forms';
import { CapitalCase, ReversePipe } from './pipes';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Task5Component } from './task5/task5.component';
import { HighlightDirective } from './color.dirctive';
import { Task6Component } from './task6/task6.component';
import { ListView } from './frame-components/data-sorting';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatabaseComponent,
    UitoolsComponent,
    InitialComponent,
    Task2Component,
    ReversePipe,
    Task3Component,
    Task4Component,
    Task5Component,
    HighlightDirective,
    Task6Component,
    ListView,
    CapitalCase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
