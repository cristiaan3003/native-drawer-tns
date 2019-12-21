import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";
import { RouterExtensions } from "nativescript-angular/router";
import * as SocialShare from "nativescript-social-share";
import { View, Color } from "tns-core-modules/ui/page/page";
import { duration } from "nativescript-toast";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
    //providers: [NoticiasService] -- provider de manera local 
})
export class SearchComponent implements OnInit {
    resultados : Array<string>;
    //Para Animacion
    //referencia a StackLayout a la variable "layout" de la vista "searchcomponet.html" 
    //para poder manipularla con typescript en el componente con
    //la variable layout_typescript. 
    @ViewChild("layout",null) layout_typescript:ElementRef; 

    constructor( private noticias: NoticiasService, private routerExtensions: RouterExtensions) {
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

    onDelete(item): void {
        this.resultados.splice(item, 1);
        alert('Se elimino el item ' + item);

    }
    onDetalle(item):void {
        alert('Mostrar los detalles del elemento ' + item);
    }

    onLongPress(s) {
        console.log(s);
        SocialShare.shareText(s, "Asunto: Compartido desde el curso!");
      }


    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    buscarAhora(s:string){
        this.resultados = this.noticias.buscar().filter((x)=> x.indexOf(s)>= 0);

        //ejecutar animacion luego del buscar
        const layout_native_element = <View>this.layout_typescript.nativeElement;
        var enums = require("tns-core-modules/ui/enums");
        layout_native_element.animate({
            backgroundColor: new Color("Green"),
            duration: 300,
            delay: 150,
            iterations: 2,
            translate: { x: 0, y: 100},
            curve: enums.AnimationCurve.easeIn
        }).then( () => layout_native_element.animate({
            backgroundColor: new Color("Black"),
            duration: 300,
            delay: 150
        }))
    }

    
}
