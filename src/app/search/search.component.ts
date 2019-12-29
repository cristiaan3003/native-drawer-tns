import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Store, State } from "@ngrx/store";
import * as Toast from 'nativescript-toasts';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";
import { Noticia, NuevaNoticiaAction } from "../domain/noticias-state.model";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { timestamp } from "rxjs/operators";
import { Color, View } from "tns-core-modules/ui/core/view/view"
import { AppState } from "../app.module";
import { disableDebugTools } from "@angular/platform-browser";
import * as SocialShare from "nativescript-social-share";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
    //providers: [NoticiasService] -- provider de manera local 
})
export class SearchComponent implements OnInit {
    resultados : Array<string> = [];
    //Para Animacion
    //referencia a StackLayout (en el html) a la variable "layout" de la vista "searchcomponet.html" 
    //para poder manipularla con typescript en el componente con
    //la variable layout_typescript. 
    @ViewChild("layout",null) layout_typescript:ElementRef; 

    constructor( private noticias: NoticiasService, private store: Store<AppState>) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.

        //suscribo a los cambios de la propiedad sugerida
        this.store.select((state) => state.noticias.sugerida)
            .subscribe((data) => {
                const f = data;
                if (f != null) {
                    Toast.show({ text: "Sugerimos leer: " + f.titulo, duration: Toast.DURATION.SHORT });
                }
            });

    }

    onPull(x) {
        let contador = this.resultados.length + 1;
        let saludos = "Hola " + contador;

        console.log(x);
        const pullRefresh = x.object;
        setTimeout(() => {
            this.resultados.push(saludos);
            pullRefresh.refreshing = false;
        }, 1000);
    }


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x):void{
        /*console.dir(x);*/
        this.store.dispatch(new NuevaNoticiaAction(new Noticia(x.view.bindingContext)));
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


    /*onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }*/

    buscarAhora(s:string){
        
        console.dir("buscarAhora: "+s);
        this.noticias.buscar(s).then((r:any) => {
            console.log("resultados buscarAhora "+ JSON.stringify(r));
            this.resultados = r;
        }, (e)=> {
            console.log("Error buscarAhora "+e);
            Toast.show({text: "Error en la busqueda", duration: Toast.DURATION.SHORT})
        });


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
