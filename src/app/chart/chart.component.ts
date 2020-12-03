import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApixuService} from '../apixu.service';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  aktieSearchForm!: FormGroup;
  public aktienData: any;


  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {
  }

  /*Einstellung Diagramm*/
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Aktienverlauf'
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Datum'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Preis'
        }
      }]
    },
  };


  /*Diagramm mit Testdaten*/
  public chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public chartType: ChartType = 'line';
  public chartLegend = false;

  public chartData = [{
    data: [28, 48, 40, 19, 86, 27, 90],
    label: 'Series B',
    pointRadius: 0,
    backgroundColor: 'rgba(0, 0, 255, 0.4)',
    borderColor: 'blue',
  }
  ];

  /*Funktion ngOnInit wird beim erzeugen der Komponente aufgerufen*/
  ngOnInit(): void {
    this.aktieSearchForm = this.formBuilder.group({
      aktie: ['']
    });
  }

  /*Funktion Uebergibt die Suchparameter und Schreibt schreib aktieData*/
  sendToAPIAktie(fromVal: any): void {
    console.log('f: ' + fromVal);
    console.log('a: ' + fromVal.aktie);
    this.apixuService
      .getAktie(fromVal.aktie)
      .subscribe((data: any) => {
        this.chartOptions.title.text = 'Apple';
        let i = data.historical.length - 1;
        for (const el of data.historical) {
          this.chartData[0].data[i] = el.close;
          this.chartLabels[i--] = el.date;
        }
        this.aktienData = data;
        console.log(this.aktienData);
      });
  }
}
