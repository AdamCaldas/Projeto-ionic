import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface CurrencyResponse {
  rates: { [key: string]: number }; 
  base: string;  
  date: string;  
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/0653d073bbfee049abcb6902/latest/USD';  

  constructor(private http: HttpClient) {}

  getCurrencyRates(): Observable<CurrencyResponse> {
    return this.http.get<CurrencyResponse>(this.apiUrl);
  }
}
