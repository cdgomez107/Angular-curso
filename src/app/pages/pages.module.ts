import { NgModule } from "@angular/core";

//Importamos las rutas de la pagina
import { PAGES_ROUTES } from './pages.routes';

//Importamos el modulo de Shared
import { SharedModule } from '../shared/shared.module';

//Importamos los componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';




@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component, 
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component, 
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
    ]
})

export class PagesModule { }