import { Component, OnInit } from '@angular/core';
//import the server
import {NewsService} from '../Service/news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit
{
  // varbile array to hold the Sports news data from API 
  spor:any=[];
  // create serve from the server been import
  constructor(private news:NewsService) {}
  // reading the Sports news data from the API in the any array
  ngOnInit()
  {
    this.news.sportNew().subscribe(
      (data)=>
      {
        this.spor = data.articles;
      })
  }
}