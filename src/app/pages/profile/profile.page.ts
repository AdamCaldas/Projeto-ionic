import { Component } from '@angular/core';

type CurrencyRates = { [key: string]: { rate: number, trend: string } };

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  currencies: CurrencyRates = {};
  currenciesUp: string[] = [];
  currenciesDown: string[] = [];

  constructor() {}

  // Função para carregar as moedas (simulando com dados fixos ou API)
  loadCurrencies() {
    // Simulando a obtenção de dados da API de câmbio
    this.currencies = {
      USD: { rate: 1.00, trend: 'up' },
      EUR: { rate: 0.9472, trend: 'down' },
      BRL: { rate: 5.9862, trend: 'down' },
      JPY: { rate: 149.92, trend: 'down' },
    };

    // Atualiza as listas de moedas em alta e em baixa
    this.compareRates();
  }

  // Função para comparar as taxas e determinar quais moedas estão em alta ou baixa
  compareRates() {
    const currencyArray = Object.keys(this.currencies);

    this.currenciesUp = [];
    this.currenciesDown = [];

    currencyArray.forEach(currency => {
      const trend = this.currencies[currency]?.trend;
      if (trend === 'up') {
        this.currenciesUp.push(currency);
      } else if (trend === 'down') {
        this.currenciesDown.push(currency);
      }
    });
  }

  // Função para obter o ícone de tendência (seta)
  getTrendIcon(currency: string): string {
    const trend = this.currencies[currency]?.trend;

    if (trend === 'up') {
      return 'arrow-up'; // Seta para cima quando a moeda está em alta
    } else if (trend === 'down') {
      return 'arrow-down'; // Seta para baixo quando a moeda está em baixa
    } else {
      return 'arrow-forward'; // Moeda está estável, seta neutra
    }
  }

  // Função chamada quando o botão é pressionado para atualizar as moedas
  updateCurrencies() {
    this.loadCurrencies();
  }

  // Função para retornar as chaves do objeto currencies
  objectKeys(obj: object) {
    return Object.keys(obj);
  }
}
