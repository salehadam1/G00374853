import { Component, OnInit } from '@angular/core';
//import the server
import {NewsService} from '../Service/news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss'],
})
export class TechnologyPage implements OnInit
{
  // varbile array to hold the Technology news data from API
  tech:any=[];
  // create serve from the server been import
  constructor(private news:NewsService) {}
  // reading the TechnologyPage news data from the API in the any array
  ngOnInit()
  {
    this.news.technologyNew().subscribe(
      (data)=>
      {
       this.tech = data.articles;
      })
  }

}