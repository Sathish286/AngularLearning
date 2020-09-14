import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'first-app';
  serverName='';
  toggle=false;
  count=0;
  logss=true;
  logFalse=false

  log=[];
  onInput(event:Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggle(){
    this.toggle=!this.toggle;
    this.count++;
    this.log.push(this.log.length+1);
     
  }

  Evennumbers :number[]= [];
  OddNumbers:number[]=[];
  //count:number=0;
  onFired(number:number){
    console.log(number)
    if(number%2===0){
      this.Evennumbers.push(number)
    }else{
      this.count++;
      this.OddNumbers.push(number)
    }
  }
  serverElements = [{name:'sathish',content:'server is added',type:'server'}];
  // serverCreated=
  // getColor(){
  
  //   return this.count<=5 ? 'green':'blue';
    
  // }
  onServerAdded(serverData:{servername:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.servername,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(blueprintData:{blueprintName:string,content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.content
    });
  }
  numbers = [1, 2, 3, 4, 5];
  oddNumbers=[1,3,5];
  evenNumbers=[2,4];
  onlyOdd = false;
  value=10;

 accounts:{name:String,status:String}[]=[];

 constructor(private dataService:DataServiceService,private userService:UserService){

 }

 ngOnInit(){
   this.accounts=this.dataService.accounts;
 }





}
