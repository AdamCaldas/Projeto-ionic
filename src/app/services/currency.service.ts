import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definindo a interface para a resposta da API
interface CurrencyResponse {
  rates: { [key: string]: number }; // As taxas de câmbio
  base: string;  // Moeda base
  date: string;  // Data da última atualização
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/0653d073bbfee049abcb6902/latest/USD';  // Substitua com a URL real da sua API

  constructor(private http: HttpClient) {}

  // Método para obter as taxas de câmbio
  getCurrencyRates(): Observable<CurrencyResponse> {
    return this.http.get<CurrencyResponse>(this.apiUrl);
  }
}
