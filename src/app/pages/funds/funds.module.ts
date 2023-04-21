import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundsComponent } from './funds.component';
import { FundListComponent } from './components/fund-list/fund-list.component';
import { RouterModule } from '@angular/router';
import { FundsRoute } from './funds.route';
import { FundsService } from './funds.service';
import { ChartModule } from 'angular-highcharts';
import { FundDetailsComponent } from './components/fund-details/fund-details.component';


@NgModule({
  declarations: [
    FundsComponent,
    FundListComponent,
    FundDetailsComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    RouterModule.forRoot(FundsRoute)
  ],
  providers: [
    FundsService
  ]
})
export class FundsModule { }
