import { Component, OnInit } from '@angular/core';
//import the server
import {NewsService} from '../Service/news.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit
{
  // varbile array to hold the Entertainmen news data from API 
  enterta:any=[];
  // create serve from the server been import
  constructor(private news:NewsService) {}
  // reading the Entertainment news data from the API in the any array
  ngOnInit()
  {
    this.news.entertainmentNew().subscribe(
      (data)=>
      {
       this.enterta = data.articles;
      })
  }
}
