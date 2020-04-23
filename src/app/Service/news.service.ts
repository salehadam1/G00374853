import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  sinc:String="au";

  constructor(private IrelandNews:HttpClient) { }
  //call the Business new API by useing the method breakNews
  breakNews():Observable<any>
  {
    return this.IrelandNews.get('http://newsapi.org/v2/top-headlines?country=ie&category=business&apiKey=000642f9c7a642c9a8ef58a92ae71500');
  }
  //call the health new API by useing the method healthNew
  healthNew():Observable<any>
  {
    return this.IrelandNews.get('http://newsapi.org/v2/top-headlines?country=ie&category=health&apiKey=000642f9c7a642c9a8ef58a92ae71500');
  }
  //call the sports new API by useing the method sportNew
  sportNew():Observable<any>
  {
    return this.IrelandNews.get('http://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=000642f9c7a642c9a8ef58a92ae71500');
  }
  //call the technology new API by useing the method technologyNew
  technologyNew():Observable<any>
  {
    return this.IrelandNews.get('http://newsapi.org/v2/top-headlines?country=ie&category=technology&apiKey=000642f9c7a642c9a8ef58a92ae71500');
  }
  //call the science new API by useing the method scienceNew
  scienceNew():Observable<any>
  {
    return this.IrelandNews.get('http://newsapi.org/v2/top-headlines?country=ie&category=science&apiKey=000642f9c7a642c9a8ef58a92ae71500');
  }
  //call the entertainment new API by useing the method entertainmentNew
  entertainmentNew():Observable<any>
  {
    return this.IrelandNews.get('http://newsapi.org/v2/top-headlines?country=ie&category=entertainment&apiKey=000642f9c7a642c9a8ef58a92ae71500');
  }



}
