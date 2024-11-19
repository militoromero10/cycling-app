import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Importamos ReactiveFormsModule
import { CreateCyclistComponent } from './cyclists/create-cyclist/create-cyclist.component';
import { CyclistChallengesComponent } from './cyclist-challenges/cyclist-challenges.component'; // Importamos el nuevo componente

@NgModule({
  declarations: [
    AppComponent,
    CreateCyclistComponent,
    CyclistChallengesComponent // Declaramos el nuevo componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule // Asegúrate de que ReactiveFormsModule esté importado
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
