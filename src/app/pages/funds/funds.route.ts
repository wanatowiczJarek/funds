import { Routes } from '@angular/router';
import { FundsComponent } from './funds.component';
import { FundListComponent } from './components/fund-list/fund-list.component';

export const FundsRoute: Routes = [
  {
    path: 'funds',
    component: FundsComponent,
    children: [
      {
        path: 'fund-list',
        component: FundListComponent
      }
    ]
  }
];
