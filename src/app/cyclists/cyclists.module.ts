import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CyclistsRoutingModule } from './cyclists-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CyclistsRoutingModule, // Importa el módulo de rutas
  ],
})
export class CyclistsModule {}
