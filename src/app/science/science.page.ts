import { Component, OnInit } from '@angular/core';
//import the server
import {NewsService} from '../Service/news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
})
export class SciencePage implements OnInit
 {
   // varbile array to hold the sciences news data from API
   sinc:any=[];
    // create serve from the server been import
   constructor(private news:NewsService){}
   // reading the sciences news data from the API in the any array
  ngOnInit()
  {
    this.news.scienceNew().subscribe(
      (data)=>
      {
        this.sinc = data.articles;
      })
  }

}