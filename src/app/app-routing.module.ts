import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cyclists',
    loadChildren: () => import('./cyclists/cyclists.module').then((m) => m.CyclistsModule),
  },
  {
    path: 'challenges',
    loadChildren: () => import('./challenges/challenges.module').then((m) => m.ChallengesModule),
  },
  { path: '', redirectTo: 'challenges', pathMatch: 'full' },
  { path: '**', redirectTo: 'challenges' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
