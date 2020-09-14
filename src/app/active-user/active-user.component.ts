import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit{
  //@Input()
   users: string[];
  //@Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService:UserService,private counterService:CounterService){

  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id)
    this.counterService.incermentActiveToInactiveCounter();
  }
  ngOnInit(){
this.users=this.userService.activeUsers;
  }

}
