import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() IntervalFired= new EventEmitter<number>();
  interval
  lastnumber:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onStart(){
    this.interval = setInterval(()=>{
      this.IntervalFired.emit(this.lastnumber++);
      this.lastnumber+1;
    },500)
  }

  onEnd(){
    clearInterval(this.interval);
  }

}
