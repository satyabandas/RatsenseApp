import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-zonemap',
  templateUrl: './zonemap.page.html',
  styleUrls: ['./zonemap.page.scss'],
})
export class ZonemapPage implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: '#ffffff',
      width: 400,
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
    title: {
      text: 'Test Chart'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [
      {
        type: "pie",
        data: [{
          name: 'Slice 1',
          y: 20
        }, {
          name: 'Slice 2',
          y: 30
        }, {
          name: 'Slice 3',
          y: 15
        }, {
          name: 'Slice 4',
          y: 25
        }]
      }
    ]
  };

  constructor(private router: Router){}

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['/loginform'])
  }

}
