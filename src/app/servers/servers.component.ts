import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
 templateUrl: './servers.component.html',
  // template:'<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
// allowServer=false;
//   constructor() { 
//     setTimeout(()=>{
//       this.allowServer=true
//     },2000)
//   }

//   ngOnInit(): void {
//   }
public servers: {id: number, name: string, status: string}[] = [];

constructor(private serversService: ServersService) { }

ngOnInit() {
  
  this.servers = this.serversService.getServers();
}

}
