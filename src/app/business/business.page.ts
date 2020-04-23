import { Component, OnInit } from '@angular/core';
//import the server
import {NewsService} from '../Service/news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  // varbile array to hold the Business news data from API 
  bussins:any=[];
  // create serve from the server been import
  constructor(private news:NewsService) {}
  // reading the Business news data from the API in the any array
  ngOnInit()
  {
    this.news.breakNews().subscribe(
      (data)=>
      {
        this.bussins = data.articles;
      })
  }
}
