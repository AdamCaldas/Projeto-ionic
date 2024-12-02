import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  // URL base da API
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest';
  private apiKey = '0653d073bbfee049abcb6902'; // Sua chave de API

  constructor(private http: HttpClient) {}

  // Método para buscar taxas de câmbio
  getExchangeRates(base: string): Observable<any> {
    // Substitua pela forma correta de passar sua chave, se necessário
    const url = `${this.apiUrl}/${base}`; // Exemplo: USD, EUR, etc.
    return this.http.get(url); // Faz a requisição GET
  }
}
