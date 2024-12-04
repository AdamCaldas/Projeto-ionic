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

 
  loadCurrencies() {
    
    this.currencies = {
      USD: { rate: 1.00, trend: 'up' },
      EUR: { rate: 0.9472, trend: 'down' },
      BRL: { rate: 5.9862, trend: 'down' },
      JPY: { rate: 149.92, trend: 'down' },
    };

  
    this.compareRates();
  }

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

  
  getTrendIcon(currency: string): string {
    const trend = this.currencies[currency]?.trend;

    if (trend === 'up') {
      return 'arrow-up'; 
    } else if (trend === 'down') {
      return 'arrow-down'; 
    } else {
      return 'arrow-forward'; 
    }
  }

  
  updateCurrencies() {
    this.loadCurrencies();
  }

  
  objectKeys(obj: object) {
    return Object.keys(obj);
  }
}
