import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { NoticiasService } from "../domain/noticias.service";
import { DetalleComponent } from "../detalle/detalle.component";
import { SearchFormComponent } from "./search-form.component";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import { MinLenDirective } from '../directives/minlen.directive';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        DetalleComponent,
        SearchComponent,
        SearchFormComponent,
        MinLenDirective,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [NoticiasService],
})
export class SearchModule { }
