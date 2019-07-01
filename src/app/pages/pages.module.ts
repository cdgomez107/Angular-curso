import { NgModule } from "@angular/core";

//Importamos las rutas de la pagina
import { PAGES_ROUTES } from './pages.routes';

//Importamos el modulo de Shared
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
//Importamos los componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementComponent } from './components/increment/increment.component';
import { DoughComponent } from './components/dough/dough.component';




@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent,
        DoughComponent,
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component, 
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }