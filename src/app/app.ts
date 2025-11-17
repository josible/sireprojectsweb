import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  projects = [
    {
      title: 'EquiGasto',
      description: 'Mi primer proyecto móvil. Una aplicación Flutter para reparto de gastos similar a Splitwise, desarrollada siguiendo Clean Architecture. Incluye autenticación, gestión de grupos, gastos y sistema de deudas.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Clean Architecture'],
      logo: 'assets/equigasto-logo.png',
      isMain: true
    }
  ];
}
