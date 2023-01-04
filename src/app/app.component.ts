import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Name = 'ng-carousel-demo';
  loader:boolean | undefined;
  constructor(){
    this.loader = true;
  }
  title = 'SuperKey';

}
