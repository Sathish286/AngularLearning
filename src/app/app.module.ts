import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{UsersComponent} from './users/users.component';
//import { ServerComponent } from './Server/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { UsernameComponent } from './username/username.component';
import {FormsModule} from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component'
import { BasicComponent } from './basic/basic.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { AccountComponent } from './account/account.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InactiveUserComponent } from './inactive-user/inactive-user.component';
import { HomeComponent } from './home/home.component';
//import { NewServerComponent } from './serverFolder/new-server/new-server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import{ServerComponent} from './servers/server/server.component'
import{Routes, RouterModule} from '@angular/router'


const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,children:[
    {path:':id/:name',component:UserComponent},
    
  ]},
  {path:'servers',component:ServersComponent,children:[
    {path:':id/edit',component:EditServerComponent},
    {path:':id',component:ServerComponent}
  ]},

 {path:'user/:id/:name',component:UserComponent}

]


@NgModule({
  declarations: [
    AppComponent,
   ServerComponent,
   ServersComponent,
   SuccessComponent,
   WarningComponent,
   UsernameComponent,
   CockpitComponent,
   ServerElementComponent,
   GameControlComponent,
   OddComponent,
   EvenComponent,
   BasicComponent,
   HighlightDirective,
   UnlessDirective,
   AccountComponent,
   NewaccountComponent,
   ActiveUserComponent,
   InactiveUserComponent,
   HomeComponent,
    UsersComponent,
  // NewServerComponent,
   EditServerComponent,
  UserComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
