import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logStatusChanged(status:String){
    console.log('A server status changed, new status: ' + status);
  }
}
