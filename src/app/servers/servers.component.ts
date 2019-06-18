import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowBewServer : boolean = false;
  serverCreationStatus :string = 'No server created yet';
  serverName :string = 'Test server name ';
  serverCreated : boolean = false;
  servers = ['TestServer', 'TestServer 2 '];

  constructor() {

    setTimeout(()=>{
      this.allowBewServer = true;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    // this.serverCreationStatus = `server was created , Name is : ${ this.serverName}`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServeName(event : any){
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
