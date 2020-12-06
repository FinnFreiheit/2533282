import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import {Label} from 'ng2-charts';
import {ApixuService} from '../../apixu.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  lineChartData = [
    {
      data: [0],
      pointRadius: 0,
      backgroundColor: 'rgba(0, 0, 255, 0.4)',
      borderColor: 'blue'
    }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartType: ChartType = 'line';
  public lineChartLegend = false;
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Google'
    },
    scales: {
      xAxes: [{
        gridLines: {display: false},
        display: true,
        ticks: {
          callback: (dataLabel: any, index: number) => {
            // Hide the label of every 2nd dataset. return null to hide the grid line too
            return index % 4 === 0 ? dataLabel : '';
          }},
        scaleLabel: {
          display: true,
          labelString: 'Datum'
        }
      }],
      yAxes: [{
        gridLines: {display: false},
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Preis'
        }
      }]
    },
  };

  constructor(private apixuService: ApixuService) {
  }

  ngOnInit(): void {
    this.apixuService
      .getAktie('GOOG')
      .subscribe((data: any) => {
        let i = data.historical.length - 1;
        for (const el of data.historical) {
          this.lineChartData[0].data[i] = el.close;
          this.lineChartLabels[i--] = el.date;
        }
      });
  }
}
