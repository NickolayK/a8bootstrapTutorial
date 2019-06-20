import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [{type : 'server' , name : "TestServer", content : 'content'}];


  onAddServer(event){
    
    this.serverElements.push(event);
  }

  onChangeFirst(){
    this.serverElements[0].name = 'new name';
  }
  destroyFirt(){
    this.serverElements.splice( 0,1);
  }
}
