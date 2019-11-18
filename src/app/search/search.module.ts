import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { NoticiasService } from "../domain/noticias.service";
import { DetalleComponent } from "../detalle/detalle.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule
    ],
    declarations: [
        SearchComponent,
        DetalleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    //providers: [NoticiasService],
})
export class SearchModule { }
