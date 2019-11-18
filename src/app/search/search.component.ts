import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
    //providers: [NoticiasService] -- provider de manera local 
})
export class SearchComponent implements OnInit {

    constructor( private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        console.log("dasda");
        console.log({nombre: {nombre: {nombre: {nombre: "pepe"}}}});
        console.dir({nombre: {nombre: {nombre: {nombre: "pepe"}}}});
        console.log([1,2,3]);
        console.dir([1,2,3]);


        this.noticias.agregar("hola");
        this.noticias.agregar("hola 2");
        this.noticias.agregar("hola 3");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x):void{
        console.dir(x);
    }
}
