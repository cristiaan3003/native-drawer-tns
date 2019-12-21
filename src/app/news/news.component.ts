import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import {ActivityIndicator} from "tns-core-modules/ui/activity-indicator"
import * as app from "tns-core-modules/application";
import * as Toast from 'nativescript-toast';

@Component({
  selector: 'News',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  doLater(fn) {setTimeout(fn,1000);}

  ngOnInit() {

    //const ToastOptions: Toast.ToastOptions = {text: "Hello", duration: Toast.DURATION_SHORT};

    var toast = Toast.makeText("Hello World");
    this.doLater(() => toast.show());

  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

cambio(e){
  let indicator=<ActivityIndicator>e.object;
  console.log("indicador busy: " + indicator.busy);
}

}
