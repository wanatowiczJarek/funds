import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FundsService } from '../../funds.service';
import { Observable, tap } from 'rxjs';
import { Fund } from '../../funds.interface';
import * as Highcharts from 'highcharts';
import { chartOptions } from './fund-list.helper';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html'
})
export class FundListComponent implements OnInit, AfterViewInit {
  fundList$: Observable<Fund[]>;

  constructor(private fundsService: FundsService) {
  }

  ngOnInit(): void {
    this.fundList$ = this.fundsService.getFundList();
  }

  ngAfterViewInit(): void {
    this.fundList$.pipe(
      tap(fundList => {
        fundList.forEach((fund: Fund, index: number): void => {
          const chart = new Highcharts.Chart(`chart-${index}`, chartOptions(fund));
        });
      })
    ).subscribe();
  }
}
