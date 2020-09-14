import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit  {

 // @Input() 
 users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();
  constructor(private userService:UserService,private counterService:CounterService){

  }

  onSetToActive(id: number) {
   this.userService.setToActive(id)
   this.counterService.incrementInactiveToActiveCunter()

  }
  ngOnInit(){
this.users=this.userService.inactiveUsers;
  }

}
