import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  evenNumbers:Array<number> = [];
  oddNumbers:Array<number> = [];
  

  onIntervalFired(event){
    console.log(event);
    event % 2 === 0 ? this.evenNumbers.push(event) : this.oddNumbers.push(event);
  }
}
