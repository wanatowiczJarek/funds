import { Fund } from "../../funds.interface";

export const chartOptions = (fund: Fund): any => {
  return {
    title: {
      text: fund.fundName
    },
    chart: {
      type: 'bar'
    },
    subtitle: {
      text: 'Performance over time'
    },
    xAxis: {
      categories: [''],

    },
    yAxis: {
      title: {
        text: ''
      }
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      },
      series: {
        pointWidth: 30,
        groupPadding: 0.2,
        pointPadding: 0.01
      }
    },
    legend: {
      enabled: true
    },
    credits: {
      enabled: true
    },
    series: [{
      name: '1 month',
      data: [fund.change1m]
    }, {
      name: '3 months',
      data: [fund.change3m]
    }, {
      name: '1 year',
      data: [fund.change1y]
    },
    {
      name: '3 years',
      data: [fund.change3y]
    }]
  };
}
