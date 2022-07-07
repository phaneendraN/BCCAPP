import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { AppService } from "src/app/app.service";

@Component({
  selector: 'app-horizontalbarchart',
  templateUrl: './horizontalbarchart.component.html',
  styleUrls: ['./horizontalbarchart.component.scss']
})
export class HorizontalbarchartComponent implements OnInit {

  recommededBarChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
    maintainAspectRatio: false,
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

  private colors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(0, 255, 0, 0.2)',
        'rgba(102, 0, 204, 0.2)',
        'rgba(255, 128, 0, 0.2)'
      ]
    }
  ]

    public chartColors: Array<any> = [
      { // first color
        backgroundColor: 'rgba(225,10,24,0.2)',
        borderColor: 'rgba(225,10,24,0.2)',
        pointBackgroundColor: 'rgba(225,10,24,0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(225,10,24,0.2)'
      },
      { // second color
        backgroundColor: 'rgba(225,10,24,0.2)',
        borderColor: 'rgba(225,10,24,0.2)',
        pointBackgroundColor: 'rgba(225,10,24,0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(225,10,24,0.2)'
      }];

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

  public recommendedBarChartLabels: string[] = [
    "Band E and Above",
    "Band D",
    "Band C",
    "Band - A,B & NA",
  ];

  public currentBarChartLabels: string[] = [
    "Band E and Above",
    "Band D",
    "Band C",
    "Band - A,B & NA",
  ];

  currentColors:any[] = [];

  recommendedColors:any[] = [];

  constructor(public appServ:AppService) { }

  ngOnInit(): void {
    this.getChartData();
  }

  getChartData(){
    this.recommededBarChartData = [];
    this.recommendedBarChartLabels = [];
    this.recommendedColors = [];
    this.currentBarChartData = [];
    this.currentBarChartLabels = [];
    this.currentColors = [];
    this.appServ.getHorizantalData().subscribe(res=>{
      if(res){
        if(res['recommended'].length > 0){
          Object.keys(res['recommended'][0]).forEach((x,i)=>{
            if(i != 0){
              this.recommendedBarChartLabels.push(x);
            }
          })
          res['recommended'].forEach((element: any,j:any) => {
            let obj:any = {};
            obj['label'] = element['SLName'];
            obj['data'] = [];
            // obj['backgroundColor'] = [];
            // obj['hoverBackgroundColor'] = [];
            this.recommendedBarChartLabels.forEach((i,index)=>{
              obj['data'].push(element[i]);
              // obj['backgroundColor'].push(this.getColors(index));
              // obj['hoverBackgroundColor'].push(this.getColors(index));
              console.log(this.currentBarChartData);
              if(index == this.recommendedBarChartLabels.length - 1){
                this.recommededBarChartData.push(obj);
              }
            })
          });
        }
        if(res['current'].length > 0){
          Object.keys(res['current'][0]).forEach((x,i)=>{
            if(i != 0){
              this.currentBarChartLabels.push(x);
            }
          })
          res['current'].forEach((element: any,j:any) => {
            let obj:any = {};
            obj['label'] = element['SLName'];
            obj['data'] = [];
            // obj['backgroundColor'] = [];
            // obj['hoverBackgroundColor'] = [];
            this.currentBarChartLabels.forEach((i,index)=>{
              obj['data'].push(element[i]);
              // obj['backgroundColor'].push(this.getColors(index));
              // obj['hoverBackgroundColor'].push(this.getColors(index));
              if(index == this.currentBarChartLabels.length - 1){
                this.currentBarChartData.push(obj);
              }
            })
          });
        }
      }
    },(err)=>{

    })
  }

  getColors(i:any){
    let colors = ["blue", "green", "yellow", "red","gray", "brown", "skyblue"];
    return i > colors.length ? "" : colors[i];
  }

}
