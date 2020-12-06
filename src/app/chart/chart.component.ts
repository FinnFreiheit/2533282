import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApixuService} from '../apixu.service';
import {ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild(BaseChartDirective)
  chart!: BaseChartDirective;
  aktieSearchForm!: FormGroup;
  aktienData: any;
  appleChart = [];
  updateNr = 0;
  errorMessage = 'ok';

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
        gridLines: {display: false},
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Datum'
        },
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


  /*Diagramm mit Testdaten*/
  chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  chartType: ChartType = 'line';
  chartLegend = false;

  chartData = [{
    data: [28, 48, 40, 19, 86, 27, 90],
    label: 'Series B',
    pointRadius: 0,
    backgroundColor: 'rgba(0, 0, 255, 0.4)',
    borderColor: 'blue',
  }
  ];

  updateChart(): void {
    this.chart.chart.update(); // This re-renders the canvas element.
  }

  /*Funktion ngOnInit wird beim erzeugen der Komponente aufgerufen*/
  ngOnInit(): void {
    this.aktieSearchForm = this.formBuilder.group({aktie: ['']});
  }

  /*Funktion uebergibt die Suchparameter und Schreibt schreib aktieData*/
  sendToAPIAktie(fromVal: any): void {
    this.apixuService
      .getAktie(fromVal.aktie)
      .subscribe((data: any) => {
        if (data.historical === undefined)
        {
          this.errorMessage = 'Fehler';
          console.log('error');
        }
        else {
          this.errorMessage = 'ok';
          let i = data.historical.length - 1;
          for (const el of data.historical) {
            this.chartData[0].data[i] = el.close;
            this.chartLabels[i--] = el.date;
          }
          this.aktienData = data;
          console.log(this.aktienData);
          if (this.updateNr > 0) { this.updateChart(); }
          this.updateNr++;
      }});
  }
}
