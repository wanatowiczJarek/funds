import { Component, Input, OnInit } from '@angular/core';
import { Fund } from '../../funds.interface';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.css']
})
export class FundDetailsComponent implements OnInit {
  fundPropKeys: string[];
  fund: Fund;

  @Input() set fundInit(fund: Fund) {
    this.fund = fund;
    this.fundPropKeys = Object.keys(fund);
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  formatLabel(label: string): string {
    return label.replace(/([a-z])([A-Z])/g, '$1 $2')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}
