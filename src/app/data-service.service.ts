import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  
  onAccountAdded(name: string, status: string) {
    this.accounts.push({name:name,status:status})
  }
  onStatusChanged(id: number, newStatus: string){
    this.accounts[id].status=newStatus
  }

  statusUpdated = new EventEmitter<String>();


}
