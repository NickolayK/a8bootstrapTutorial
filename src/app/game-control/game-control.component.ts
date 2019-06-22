import { Component, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output('timeCounter') timer = new EventEmitter();

  timerId : any;
  counter :number = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame(){

    this.timerId = setInterval( ()=> {
        this.counter ++;
        console.log(this.counter);
        this.timer.emit(this.counter)
    }, 1000)

  }

  stopGame(){

    clearInterval(this.timerId);
    console.log('game stopped')

  }

}
