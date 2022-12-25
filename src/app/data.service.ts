import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class DataService {
  constructor() {}

  getSales() {
    return of({
      year1: {
        volumeSales: '1.09',
        valueSales: '1.23',
      },
      year2: {
        volumeSales: '3.11',
        valueSales: '1.56',
      },
      year3: {
        volumeSales: '2.12',
        valueSales: '4.69',
      },
      year4: {
        volumeSales: '1.12',
        valueSales: '1.64',
      },
      year5: {
        volumeSales: '1.10',
        valueSales: '2.41',
      },
      Year6: {
        volumeSales: '8.55',
        valueSales: '7.53',
      },
      Year7: {
        volumeSales: '1.55',
        valueSales: '7.53',
      },
    });
  }
}
