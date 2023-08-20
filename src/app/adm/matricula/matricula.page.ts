import { Component } from '@angular/core';

@Component({
  selector: 'app-matricula',
  templateUrl: 'matricula.page.html',
  styleUrls: ['matricula.page.scss'],
})
export class MatriculaComponent {
  firstName: string = '';
  lastName: string = '';

  constructor() {}

  submitForm() {
    console.log('Nome:', this.firstName);
    console.log('Sobrenome:', this.lastName);

    // Você pode adicionar lógica adicional aqui, como enviar os dados para um serviço ou API.
  }
}
