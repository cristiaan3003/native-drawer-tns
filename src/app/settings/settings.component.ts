import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { disableDebugTools } from "@angular/platform-browser";
import * as Toast from 'nativescript-toasts';
import * as dialogs from "tns-core-modules/ui/dialogs";

let LS = require("nativescript-localstorage");


@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    nombreUsuario: string;

    constructor() {
        // Use the component constructor to inject providers.
        this.nombreUsuario = LS.getItem("nombreUsuario");
        console.log(LS.getItem("nombreUsuario"));


    }

    doLater(fn) { setTimeout(fn,1000);}


    ngOnInit(): void {
        // Init your component properties here.

        /*
        this.doLater(()=>
            dialogs.action("Mensaje", "Cancelar", ["Opcion 1", "Opcion 2"])
            .then((result) => {
                console.log("resultado: " + result);
                if (result === "Opcion 1") {
                    this.doLater(() =>
                    dialogs.alert({
                        title: "Titulo 1",
                        message: "Mensaje 1",
                        okButtonText: "Boton 1"
                    }).then(() => console.log("Cerrado 1")));
                } else if (result === "Opcion 2") {
                    this.doLater(() =>
                    dialogs.alert({
                        title: "Titulo 2",
                        message: "Mensaje 2",
                        okButtonText: "Boton 2"
                    }).then(() => console.log("Cerrado 2")));
                }
            }));

            let toastOptions:Toast.ToastOptions = {
                text: "Hello World", 
                duration: Toast.DURATION.SHORT,
                position: Toast.POSITION.BOTTOM //optional property
            };
            Toast.show(toastOptions);  */
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTapButton(): void {
        console.log(this.nombreUsuario);
        LS.setItem("nombreUsuario", this.nombreUsuario);
    }
}