import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private apiUrl = 'https://sua-api.com';  // Substitua pela sua API real

  constructor(private http: HttpClient) { }

  // Método para buscar as moedas
  getCryptos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
