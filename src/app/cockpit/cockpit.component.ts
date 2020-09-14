import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintAdded = new EventEmitter<{blueprintName:string,content:string}>();

  @ViewChild('serverContent') serverContent:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  newServerName = '';
  // newServerContent = '';

  onAddServer(name:HTMLInputElement) {
    //console.log(this.serverContent.nativeElement.value)
    //this.newServerContent
     this.serverCreated.emit({serverName:name.value,serverContent:this.serverContent.nativeElement.value});
  }

  onAddBlueprint(name:HTMLInputElement) {
   this.blueprintAdded.emit({blueprintName:name.value,content:this.serverContent.nativeElement.value});
  }

}
