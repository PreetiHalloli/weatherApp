import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Data } from './data.model';

const STORAGE_KEY = "todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  title = 'localstorageApp';
}
