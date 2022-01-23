import { Component } from '@angular/core';
import {Currency, ICurrency} from "../currency,model";

import {Observable} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {HttpServiceService} from "../http-service.service";
import {FormBuilder} from "@angular/forms";
import {IRates} from "../rates.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zadanie-politechnika-angular';
  currency?: ICurrency;
  currencyname?: string;
  rateslist?: Array<IRates> = [];
  errorMessage?: string;

  constructor(protected httpService: HttpServiceService) {
  }

  ngOnInit(): void {
    this.httpService.loadRatesList().subscribe(response=>{
      this.rateslist = response
    },error => {
      console.log(error)
    });
  }

  loadCurrency(data1: string, data2: string, code: string){
    console.log(data1);
    console.log(data2);
    console.log(code);
    this.httpService.loadCurrency(data1, data2, code).subscribe(
      response =>{
        console.log(response)
        this.currency = response;
        this.errorMessage = "";
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.errorMessage = "Brak wyników dla podanej daty, wybierz inną date!";
      }
    );
  }
  showCurrency(): void{
    console.log(this.currency)
  }
}
