import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FundsModule } from './pages/funds/funds.module';
import { AppRoutingModule } from './app-routing.module';
import { FundsService } from './pages/funds/funds.service';
import { ChartModule } from 'angular-highcharts';

function setFundsProviderFactory(fundsService: FundsService): any {
  return () => fundsService.setFunds();
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ChartModule,
    BrowserModule,
    FundsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: APP_INITIALIZER, useFactory: setFundsProviderFactory, deps: [FundsService], multi: true
  }],
  exports: [ChartModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
