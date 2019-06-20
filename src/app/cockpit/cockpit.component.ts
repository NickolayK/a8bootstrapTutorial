import { Component, OnInit , EventEmitter , Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  // newServerName = '';
  // newServerContent = '';
  @Output('customAddServer') addServer:EventEmitter<{ type:string , name :string , content :string }> = new EventEmitter();

  @ViewChild('newServerContentInput' , { static : true  }) newServerContentInput :ElementRef
  constructor() { }

  ngOnInit() {
  }
  // onAddServer() {

  //   this.addServer.emit({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent,
  //   });

  // }

  // onAddBlueprint() {
  //   this.addServer.emit({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }
  onAddServer(serverName :HTMLInputElement ) {


    this.addServer.emit({
      type: 'server',
      name: serverName.value,
      content: this.newServerContentInput.nativeElement.value
    });

  }

  onAddBlueprint(serverName :HTMLInputElement ) {
    this.addServer.emit({
      type: 'blueprint',
      name: serverName.value,
      content: this.newServerContentInput.nativeElement.value
    });
  }
}
