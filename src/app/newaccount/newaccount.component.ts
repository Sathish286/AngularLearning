import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent  {

  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logging:LoggingService,private DataService:DataServiceService){

    this.DataService.statusUpdated.subscribe(
      (status:String)=>alert('Error message'+status)
    );
    
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.DataService.onAccountAdded(accountName,accountStatus)
    this.logging.logStatusChanged(accountStatus);
  }

}
