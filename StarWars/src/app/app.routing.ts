import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Componentes
import { HomeComponent } from './components/home/home.component';
import { NavesComponent } from './components/naves/naves.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { RazasComponent } from './components/razas/razas.component';

// Array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'naves', component: NavesComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'planetas', component: PlanetasComponent},
    {path: 'personajes', component: PersonajesComponent},
    {path: 'razas', component: RazasComponent},
    {path: '**', component: HomeComponent}
];

//Exportar modulo del routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoutes);