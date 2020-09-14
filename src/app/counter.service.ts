import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  activeToInactiveCounter=0;
  inactiveToActiveCounter=0;

  incermentActiveToInactiveCounter(){
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter)
  }

  incrementInactiveToActiveCunter(){
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter)
  }
}
