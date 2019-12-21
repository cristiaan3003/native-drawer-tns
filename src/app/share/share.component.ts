import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  nombreUsuario: string = "";
  @Output() search: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

onButtonTap(): void{
  console.log(this.nombreUsuario);
  if(this.nombreUsuario.length > 4) {
      this.search.emit(this.nombreUsuario);
      appSettings.setString("nombreUsuario","Hola");
      appSettings.setBoolean("estalogueado", true);
      const estalogueado = appSettings.getBoolean("estalogueado",false);
  }else{
      appSettings.clear();
  }
}

}
