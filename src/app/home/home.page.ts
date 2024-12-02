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
  "AFN":67.9054,
  "ALL":93.1414,
  "AMD":394.3745,
  "ANG":1.7900,
  "AOA":920.3088,
  "ARS":1011.7500,
  "AUD":1.5381,
  "AWG":1.7900,
  "AZN":1.7002,
  "BAM":1.8524,
  "BBD":2.0000,
  "BDT":119.4888,
  "BGN":1.8524,
  "BHD":0.3760,
  "BIF":2930.5659,
  "BMD":1.0000,
  "BND":1.3394,
  "BOB":6.9137,
  "BRL":5.9862,
  "BSD":1.0000,
  "BTN":84.6214,
  "BWP":13.6266,
  "BYN":3.2754,
  "BZD":2.0000,
  "CAD":1.4007,
  "CDF":2854.1544,
  "CHF":0.8814,
  "CLP":977.8676,
  "CNY":7.2569,
  "COP":4414.1048,
  "CRC":508.8708,
  "CUP":24.0000,
  "CVE":104.4359,
  "CZK":23.9276,
  "DJF":177.7210,
  "DKK":7.0674,
  "DOP":60.3143,
  "DZD":133.4414,
  "EGP":49.5863,
  "ERN":15.0000,
  "ETB":124.5949,
  "EUR":0.9472,
  "FJD":2.2662,
  "FKP":0.7873,
  "FOK":7.0667,
  "GBP":0.7873,
  "GEL":2.7813,
  "GGP":0.7873,
  "GHS":15.3832,
  "GIP":0.7873,
  "GMD":71.8837,
  "GNF":8601.2020,
  "GTQ":7.7109,
  "GYD":209.2041,
  "HKD":7.7822,
  "HNL":25.2812,
  "HRK":7.1362,
  "HTG":131.0987,
  "HUF":391.2825,
  "IDR":15851.4664,
  "ILS":3.6336,
  "IMP":0.7873,
  "INR":84.6255,
  "IQD":1311.5071,
  "IRR":41959.1659,
  "ISK":137.9322,
  "JEP":0.7873,
  "JMD":158.8805,
  "JOD":0.7090,
  "JPY":149.9179,
  "KES":129.5985,
  "KGS":86.1646,
  "KHR":4033.4761,
  "KID":1.5380,
  "KMF":465.9601,
  "KRW":1394.7292,
  "KWD":0.3073,
  "KYD":0.8333,
  "KZT":515.6733,
  "LAK":21934.0436,
  "LBP":89500.0000,
  "LKR":290.3800,
  "LRD":179.2644,
  "LSL":18.0741,
  "LYD":4.8936,
  "MAD":10.0038,
  "MDL":18.2954,
  "MGA":4663.9262,
  "MKD":58.2791,
  "MMK":2098.4077,
  "MNT":3407.5983,
  "MOP":8.0154,
  "MRU":39.9233,
  "MUR":46.3722,
  "MVR":15.4361,
  "MWK":1743.8614,
  "MXN":20.3787,
  "MYR":4.4449,
  "MZN":64.2907,
  "NAD":18.0741,
  "NGN":1682.6035,
  "NIO":36.7807,
  "NOK":11.0586,
  "NPR":135.3942,
  "NZD":1.6927,
  "OMR":0.3845,
  "PAB":1.0000,
  "PEN":3.7521,
  "PGK":3.9967,
  "PHP":58.6325,
  "PKR":278.2104,
  "PLN":4.0718,
  "PYG":7800.4242,
  "QAR":3.6400,
  "RON":4.7136,
  "RSD":110.7972,
  "RUB":106.8035,
  "RWF":1381.4006,
  "SAR":3.7500,
  "SBD":8.5029,
  "SCR":13.8809,
  "SDG":532.9884,
  "SEK":10.9181,
  "SGD":1.3399,
  "SHP":0.7873,
  "SLE":22.7323,
  "SLL":22732.2912,
  "SOS":571.3539,
  "SRD":35.5256,
  "SSP":3670.1302,
  "STN":23.2048,
  "SYP":12986.2026,
  "SZL":18.0741,
  "THB":34.3457,
  "TJS":10.8958,
  "TMT":3.5001,
  "TND":3.1450,
  "TOP":2.3502,
  "TRY":34.7150,
  "TTD":6.7731,
  "TVD":1.5380,
  "TWD":32.4795,
  "TZS":2640.0422,
  "UAH":41.5840,
  "UGX":3693.4838,
  "UYU":42.7834,
  "UZS":12833.1935,
  "VES":47.6074,
  "VND":25351.4487,
  "VUV":118.5907,
  "WST":2.7815,
  "XAF":621.2801,
  "XCD":2.7000,
  "XDR":0.7598,
  "XOF":621.2801,
  "XPF":113.0236,
  "YER":249.6749,
  "ZAR":18.0790,
  "ZMW":27.1708,
  "ZWL":25.4513
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
