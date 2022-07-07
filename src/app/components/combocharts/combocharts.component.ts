import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";


@Component({
  selector: 'app-combocharts',
  templateUrl: './combocharts.component.html',
  styleUrls: ['./combocharts.component.sass']
})
export class CombochartsComponent implements OnInit {

  barChartPlugins = [ChartDataLabels];

  public chart = {
    datasets: [
      { data: [40, 25, 35, 45, 20, 20, 30, 40 , 50 ,80, 40, 25, 35, 45, 20, 40, 25, 35, 45, 20, 40, 25, 35, 45, 20], label: 'Recommended', type: 'line' },
      // { data: [40, 15, 70, 25, 25, 30, 35, 45 , 55 ,85, 45, 20, 30, 40, 25, 45, 75, 15, 55, 25, 45, 20, 30, 40, 25], label: 'Current', type: 'line' },
      { data: [40, 15, 70, 25, 25], label: "SL1" },
      { data: [30, 35, 45 , 55 ,85], label: "SL2" },
      { data: [ 35, 45 , 55 ,85, 45], label: "SL3" },
      { data: [  55 ,85, 45, 20, 30], label: "SL4" },
      { data: [ 45, 20, 30, 40, 25], label: "SL5" },
      // { data: [20, 20, 30, 40], label: 'SL1-Recommended', stack: 'a' },
      // { data: [20, 20, 30, 40], label: 'SL1-Current', stack: 'a' },
      // { data: [20, 20, 30, 40], label: 'SL2-Recommended', stack: 'b' },
      // { data: [19, 25, 33, 45], label: 'SL2-Current', stack: 'b' },
      // { data: [20, 20, 30, 40], label: 'SL3-Recommended', stack: 'c' },
      // { data: [12, 23, 39, 70], label: 'SL3-Current', stack: 'c' },
      // { data: [20, 20, 30, 40], label: 'SL4-Recommended', stack: 'd' },
      // { data: [22, 29, 35, 55], label: 'SL4-Current', stack: 'd' },
      // { data: [20, 20, 30, 40], label: 'SL5-Recommended', stack: 'e' },
      // { data: [42, 44, 32, 65], label: 'SL5-Current', stack: 'e' },
    ],
    labels: ['Band E and Above','Band D', 'Band C','Band - A,B & NA'],
    options: {
      legend: {
        display: true,
      },
      plugins: {
        datalabels: {
          anchor: 'center',
          align: 'center',
          font: {
            size: 10,
          },
         formatter:  function(value: any, context: any) {
           console.log(context);
           return context['datasetIndex'] > 1 ? '' : value;
         }
        },
        legend: {
          position: 'bottom',
        },
        title: {
          display: false,
          text: 'Recommended',
          position: "bottom",
        }
      },
      maintainAspectRatio: false,
      // indexAxis: 'y',
      interaction: {
        mode: 'nearest'
      },
      elements: {
        bar: {
          borderWidth: 4,
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              min: 0,
              max: 0,
            },
          },
        ],
      },
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
