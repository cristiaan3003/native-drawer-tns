import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as camera from "nativescript-camera";
import { Image } from "tns-core-modules/ui/image";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onButtonTap() {
        camera.requestCameraPermissions().then(
            function success() {
                const options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true};
                camera.takePicture(options)
                      .then((imageAsset) => {
                          console.log("Tamaño: " + imageAsset.options.width + "x" + imageAsset.options.height);
                          console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
                          console.log("Foto guardada");
                      }).catch((err) => {
                          console.log("Error -> " + err.message);
                      });
            },
            function failure () {
                console.log("Permiso de camara no aceptado por el usuario");
            }
        );
    }

}
