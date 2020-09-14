import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 

    // this.inactiveUsers.
  }
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
 

  //userId = new EventEmitter<number>();
  setToActive(id:number){
   this.activeUsers.push(this.inactiveUsers[id]);
   this.inactiveUsers.splice(id,1)
  }
  setToInactive(id:number){
    this.inactiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id,1)
  }
}
