import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateCyclistComponent } from './create-cyclist/create-cyclist.component'; // Importar el componente de creación
import { CyclistChallengesComponent } from '../cyclist-challenges/cyclist-challenges.component'; // Importar el nuevo componente

const routes: Routes = [
  { path: '', component: ListComponent }, // Ruta principal del módulo cyclists
  { path: 'create', component: CreateCyclistComponent }, // Ruta para crear un ciclista
  { path: 'challenges/:id', component: CyclistChallengesComponent }, // Ruta para mostrar los retos del ciclista
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyclistsRoutingModule {}
