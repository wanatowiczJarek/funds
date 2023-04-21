export interface FundDto {
  status: FundStatus;
  data: Fund[];
}

export interface FundStatus {
  success: boolean;
  errrors: string[];
  infos: string[];
  jSessionid: string
}

export interface Fund {
  [key: string]: any;
  instrumentId: string;
  isin: string;
  fundName: string;
  fundType: string;
  estimationDate: number;
  rate: number;
  change1y: number;
  currency: string;
  availableForMonthlySaving: boolean;
  redemptionMinFee: FundRedemptionMinFee;
  redemptionPercent: null;
  subscriptionMinFee: FundRedemptionMinFee;
  subscriptionPercent: null;
  subscriptionMinValue: FundRedemptionMinFee;
  investmentClass: null;
  permissions: FundPermissions;
  buyCommissions: null;
  sellCommissions: null;
  change1m: number;
  change3m: number;
  change3y: number;
  minimumCommission: null;
  technicalCommission: null;
  technicalCommissionUp: null;
  sellCommission: null;
  administrativeFee: number;
  startDate: number;
  yearHigh: number;
  yearLow: number;
  graphImageLink: null;
  documents: FundDocument[];
  fundCompany: string;
  startValue: number;
  closePrice: number;
  latestClosePriceDate: number;
  countDecimals: number;
}

export interface FundDocument {
  url: string;
  title: string;
}

export interface FundPermissions {
  allowedToBuy: boolean;
  allowedToSell: boolean;
  allowedToSwap: boolean;
  allowedForWatchlist: boolean;
  allowedForDetailedInformation: boolean;
  allowedToTrade: boolean;
}

export interface FundRedemptionMinFee {
  amount: number;
  currency: string;
  empty: boolean;
}
