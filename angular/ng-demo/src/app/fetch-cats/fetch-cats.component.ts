import { Component, OnDestroy, OnInit } from '@angular/core';
import { apikey } from 'src/apiKey';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-fetch-cats',
  templateUrl: './fetch-cats.component.html',
  styleUrls: ['./fetch-cats.component.css']
})
export class FetchCatsComponent implements OnInit, OnDestroy{
  
  //* Dependency Injection
  //> Note: 'private' means its only available to this ts class (not the HTML page)
  constructor(private http: HttpClient) {}
  catpics : any[] = [];
  numCats : number = 0;
  now : number | Date = Date.now();
  getCats() : void {
    const url = `https://api.thecatapi.com/v1/images/search?limit=${this.numCats}`
    console.log(url);
    //> assembling and sending the get request:
    this.http.get(url, {
      headers: {
        'x-api-key' : apikey
      }
    }).subscribe((data: any) => {
      console.log(data);
      this.catpics = data;
/*       for(let index in data) {
        this.catpics.push(data[index])
      } */
    })
  }

  //> Runs on mount/render for first time:
  ngOnInit() : void {
    console.log(apikey);
  }

  //* (SEE: LIFECYCLE HOOKS page on angular docs)
  //> Runs on unmount:
   ngOnDestroy() : void {
    console.log("destroying");
  }

  incrementCats() : void {
    this.numCats++;
  }
}
