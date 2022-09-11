import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  page_type:any=""

  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.page_type = this.activatedRoute.snapshot.url[0].path
  }

}
