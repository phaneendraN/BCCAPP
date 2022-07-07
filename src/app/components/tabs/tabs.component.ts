import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  messages: string[] = [];

  message(s: string) {
    this.messages.push(s);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
