import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverId :number = 10;
  serverStatus :string ;
  @Input() serverName :string
  constructor() { 

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'

  }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus
  }
  getColor(){
      return this.serverStatus === 'online' ?  'green' : 'red';
  }
}
