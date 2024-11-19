import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ChallengesRoutingModule, // Importa el módulo de rutas
  ],
})
export class ChallengesModule {}
