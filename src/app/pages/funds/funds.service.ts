import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, of } from "rxjs";
import { share, map } from 'rxjs/operators';
import { Fund, FundDto } from "./funds.interface";

export const FUNDS_PATH = 'https://ivarpivar.netlify.app/api';

@Injectable()
export class FundsService {
  private funds: FundDto;

  constructor(private httpClient: HttpClient) {
  }

  async setFunds(): Promise<FundDto> {
    const funds = await firstValueFrom(this.getFundsData());

    this.funds = funds[0];

    return funds[0];
  }

  getFundsData(): Observable<any> {
    return this.httpClient.get<FundDto>(FUNDS_PATH);
  }

  getFundList(): Observable<Fund[]> {
    return of(this.funds).pipe(
      map(funds => funds.data),
      share()
    );
  }
}
