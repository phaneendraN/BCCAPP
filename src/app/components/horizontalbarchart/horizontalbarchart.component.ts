import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

@Component({
  selector: 'app-horizontalbarchart',
  templateUrl: './horizontalbarchart.component.html',
  styleUrls: ['./horizontalbarchart.component.sass']
})
export class HorizontalbarchartComponent implements OnInit {

  recommededBarChartOptions: ChartOptions = {
    responsive: true,
      indexAxis: 'y',
      interaction: {
        mode: 'nearest'
      },
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      plugins: {
        datalabels: {
          anchor: 'center',
          align: 'center',
          font: {
            size: 10,
          },
         formatter:  function(value, context) {
           return value;
         }
        },
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Recommended',
          position: "bottom",
        }
      }
  };

  currentBarChartOptions: ChartOptions = {
    responsive: true,
      indexAxis: 'y',
      interaction: {
        mode: 'nearest'
      },
      elements: {
        bar: {
          borderWidth: 2
        }
      },
      scales: {
        y: {

        },
        x: {
          beginAtZero: true,
          min: 0
        },
      },
      plugins: {
        datalabels: {
          anchor: 'center',
          align: 'center',
          font: {
            size: 10,
          },
         formatter:  function(value, context) {
           return value;
         }
        },
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Current',
          position: "bottom",
        }
      }
  };

  barChartType: any = 'bar';
  barChartPlugins = [ChartDataLabels];

  public barChartLegend = false;

  public recommededBarChartData: any[] = [
    { data: [20, 20, 30, 40], label: "SL1", barPercentage: 3,
    barThickness: 10,
    maxBarThickness: 15,},
    { data: [19, 25, 33, 45], label: "SL2",
    barPercentage: 3,
    barThickness: 10,
    maxBarThickness: 15,
                    },
    { data: [12, 23, 39, 70], label: "SL3",
    barPercentage: 3,
    barThickness: 10,
    maxBarThickness: 15,
                    },
    { data: [22, 29, 35, 55], label: "SL4",
    barPercentage: 3,
    barThickness: 10,
    maxBarThickness: 15,
                    },
    { data: [42, 44, 32, 65], label: "SL5",
    barPercentage: 3,
    barThickness: 10,
    maxBarThickness: 15,
                    },
  ];

  public currentBarChartData: any[] = [
    { data: [20, 20, 30, 40], label: "SL1" , barPercentage: 3,
    barThickness: 10,
    maxBarThickness: 15,},
    { data: [19, 25, 33, 45], label: "SL2", barPercentage: 3,
    barThickness: 10,
    maxBarThickness: 15, },
    { data: [12, 23, 39, 70], label: "SL3", barPercentage: 3,
    barThickness: 10,
    maxBarThickness: 15, },
    { data: [22, 29, 35, 55], label: "SL4",  barPercentage: 3,
    barThickness: 10,
    maxBarThickness: 15, },
    { data: [42, 44, 32, 65], label: "SL5", barPercentage: 3,
    barThickness: 10,
    maxBarThickness: 15,},
  ];

  public barChartLabels: string[] = [
    "Band E and Above",
    "Band D",
    "Band C",
    "Band - A,B & NA",
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
