import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route:ActivatedRoute) { }
  idNumber:number=0;
  ngOnInit() {
    this.idNumber=+this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(this.idNumber);
    this.route.params.subscribe(
      (params:Params)=>{this.server=this.serversService.getServer(+params['id'])}
    )
  }

}
