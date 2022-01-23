import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currency, ICurrency} from "./currency,model";
import {Observable} from "rxjs";
import {IRates} from "./rates.model";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private resourceUrl: string = "http://localhost:8080/currency";
  private resourceUrlRates: string = "http://localhost:8080/rates";
  constructor(protected http: HttpClient) {
  }

  loadCurrency(data1: string, data2: string, code: string): Observable<ICurrency> {
    return  this.http.get<ICurrency>(this.resourceUrl+"/"+code+"/"+data1+"/"+data2);
  }
  loadRatesList(): Observable<Array<IRates>> {
    return  this.http.get<Array<IRates>>(this.resourceUrlRates);
  }
}
