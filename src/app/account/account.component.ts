import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent  {

  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

constructor(private loggingService:LoggingService,private dataService:DataServiceService){

}
  onSetTo(status: string) {
  //  this.statusChanged.emit({id: this.id, newStatus: status});
  this.dataService.statusUpdated.emit(status)
  this.dataService.onStatusChanged(this.id,status)
    this.loggingService.logStatusChanged(status);
  //  console.log('A server status changed, new status: ' + status);
  }
}
