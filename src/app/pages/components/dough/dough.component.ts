import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dough',
  templateUrl: './dough.component.html',
  styles: []
})
export class DoughComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
