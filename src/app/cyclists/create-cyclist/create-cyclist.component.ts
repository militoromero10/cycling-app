import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CyclistsService } from '../cyclists.service'; // Importar el servicio

@Component({
  selector: 'app-create-cyclist',
  templateUrl: './create-cyclist.component.html',
  styleUrls: ['./create-cyclist.component.css'],
})
export class CreateCyclistComponent {
  cyclistForm: FormGroup;
  responseMessage: string = '';  // Variable para almacenar el mensaje de respuesta
  responseStatusCode: number | null = null;  // Variable para almacenar el código de estado

  constructor(private fb: FormBuilder, private cyclistService: CyclistsService) {
    this.cyclistForm = this.fb.group({
      piun: ['', Validators.required],
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.cyclistForm.valid) {
      this.cyclistService.createCyclist(this.cyclistForm.value).subscribe(
        (response) => {
          // Asignar la respuesta del backend a las variables
          this.responseMessage = response.message;
          this.responseStatusCode = response.statusCode;
        },
        (error) => {
          // Si ocurre un error, se puede mostrar un mensaje de error
          this.responseMessage = 'Error al crear el ciclista. Inténtalo de nuevo.';
          this.responseStatusCode = error.status;
        }
      );
    }
  }
}
