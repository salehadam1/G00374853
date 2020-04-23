import { Component, OnInit } from '@angular/core';
//import the server
import {NewsService} from '../Service/news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit
 {
  // varbile array to hold the health news data from API 
    heal:any=[];
  // create serve from the server been import
   constructor(private news:NewsService) {}
  // reading the health news data from the API in the any array
  ngOnInit()
  {
    this.news.healthNew().subscribe(
      (data)=>
      {
        this.heal = data.articles;
      })
  }

}