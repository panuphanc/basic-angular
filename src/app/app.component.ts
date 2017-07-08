import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isShow = false;
  btnClickLogs = [];

  showDetail() {
    this.isShow = !this.isShow;
    this.btnClickLogs.push(new Date());
  }
}
