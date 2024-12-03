import { Component } from '@angular/core';

type CurrencyRates = { [key: string]: number };

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fromCurrency: string = 'USD'; // Moeda de origem
  toCurrency: string = 'BRL'; // Moeda de destino
  amount: number = 1; // Valor a ser convertido
  convertedValue: number | null = null; // Resultado da conversão

  // Lista de moedas e suas taxas
  currencies: CurrencyRates = {
    "USD":1,
  "AED":3.6725,
  "AFN":68.1390,
  "ALL":93.2605,
  "AMD":397.9336,
  "ANG":1.7900,
  "AOA":920.6479,
  "ARS":1011.9200,
  "AUD":1.5444,
  "AWG":1.7900,
  "AZN":1.7002,
  "BAM":1.8627,
  "BBD":2.0000,
  "BDT":119.5029,
  "BGN":1.8625,
  "BHD":0.3760,
  "BIF":2932.6185,
  "BMD":1.0000,
  "BND":1.3453,
  "BOB":6.9088,
  "BRL":6.0179,
  "BSD":1.0000,
  "BTN":84.7440,
  "BWP":13.6673,
  "BYN":3.2708,
  "BZD":2.0000,
  "CAD":1.4045,
  "CDF":2854.8756,
  "CHF":0.8863,
  "CLP":973.6629,
  "CNY":7.2783,
  "COP":4442.2051,
  "CRC":508.1753,
  "CUP":24.0000,
  "CVE":105.0126,
  "CZK":24.0421,
  "DJF":177.7210,
  "DKK":7.1050,
  "DOP":60.3247,
  "DZD":133.5461,
  "EGP":49.7152,
  "ERN":15.0000,
  "ETB":123.8572,
  "EUR":0.9523,
  "FJD":2.2687,
  "FKP":0.7897,
  "FOK":7.1053,
  "GBP":0.7897,
  "GEL":2.8472,
  "GGP":0.7897,
  "GHS":15.2311,
  "GIP":0.7897,
  "GMD":71.8795,
  "GNF":8584.2033,
  "GTQ":7.7228,
  "GYD":209.1600,
  "HKD":7.7817,
  "HNL":25.3022,
  "HRK":7.1756,
  "HTG":131.0856,
  "HUF":394.7914,
  "IDR":15925.7827,
  "ILS":3.6453,
  "IMP":0.7897,
  "INR":84.7498,
  "IQD":1312.9051,
  "IRR":41940.4885,
  "ISK":138.7479,
  "JEP":0.7897,
  "JMD":157.0276,
  "JOD":0.7090,
  "JPY":149.7151,
  "KES":129.7450,
  "KGS":86.8492,
  "KHR":4041.9782,
  "KID":1.5444,
  "KMF":468.5334,
  "KRW":1405.0759,
  "KWD":0.3074,
  "KYD":0.8333,
  "KZT":525.2612,
  "LAK":21935.7612,
  "LBP":89500.0000,
  "LKR":290.5232,
  "LRD":179.1979,
  "LSL":18.1568,
  "LYD":4.8687,
  "MAD":10.0236,
  "MDL":18.2964,
  "MGA":4656.0152,
  "MKD":58.2997,
  "MMK":2102.2724,
  "MNT":3426.8576,
  "MOP":8.0151,
  "MRU":39.8949,
  "MUR":46.5232,
  "MVR":15.4503,
  "MWK":1744.2329,
  "MXN":20.4239,
  "MYR":4.4585,
  "MZN":63.9743,
  "NAD":18.1568,
  "NGN":1674.4247,
  "NIO":36.7964,
  "NOK":11.0982,
  "NPR":135.5903,
  "NZD":1.6992,
  "OMR":0.3845,
  "PAB":1.0000,
  "PEN":3.7555,
  "PGK":4.0178,
  "PHP":58.6855,
  "PKR":277.8993,
  "PLN":4.0817,
  "PYG":7843.0574,
  "QAR":3.6400,
  "RON":4.7355,
  "RSD":111.4274,
  "RUB":106.2900,
  "RWF":1387.7792,
  "SAR":3.7500,
  "SBD":8.5122,
  "SCR":14.4144,
  "SDG":454.4825,
  "SEK":10.9892,
  "SGD":1.3453,
  "SHP":0.7897,
  "SLE":22.7323,
  "SLL":22732.2912,
  "SOS":571.1184,
  "SRD":35.5172,
  "SSP":3697.3784,
  "STN":23.3330,
  "SYP":12920.0070,
  "SZL":18.1568,
  "THB":34.4824,
  "TJS":10.7895,
  "TMT":3.5000,
  "TND":3.1584,
  "TOP":2.3771,
  "TRY":34.7458,
  "TTD":6.7518,
  "TVD":1.5444,
  "TWD":32.6052,
  "TZS":2640.1075,
  "UAH":41.6789,
  "UGX":3694.2429,
  "UYU":43.0837,
  "UZS":12836.6369,
  "VES":47.7293,
  "VND":25380.7620,
  "VUV":118.6194,
  "WST":2.7720,
  "XAF":624.7112,
  "XCD":2.7000,
  "XDR":0.7619,
  "XOF":624.7112,
  "XPF":113.6477,
  "YER":249.7825,
  "ZAR":18.1483,
  "ZMW":26.9418,
  "ZWL":25.5672
  };

  constructor() {}

  // Método para calcular a conversão
  convert() {
    if (!this.fromCurrency || !this.toCurrency || !this.amount) {
      alert('Preencha todos os campos!');
      return;
    }

    const fromRate = this.currencies[this.fromCurrency];
    const toRate = this.currencies[this.toCurrency];

    if (fromRate && toRate) {
      // Calcula o valor convertido
      this.convertedValue = (this.amount / fromRate) * toRate;
    } else {
      alert('Erro: Moeda não encontrada!');
    }
  }

  // Método para retornar as chaves do objeto currencies
  objectKeys(obj: object) {
    return Object.keys(obj);
  }
}
