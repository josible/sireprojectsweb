import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects = [
    {
      title: 'EquiGasto',
      description: 'Mi primer proyecto móvil. Una aplicación Flutter para reparto de gastos similar a Splitwise, desarrollada siguiendo Clean Architecture. Incluye autenticación, gestión de grupos, gastos y sistema de deudas.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Clean Architecture'],
      logo: 'assets/equigasto-logo.png',
      isMain: true
    },
    {
      title: 'Abrazamillas',
      description: 'Aplicación web Angular para la II Concentración Motera Abrazamillas en Cinco Casas (Ciudad Real). Incluye información del evento, programación, rutas y patrocinadores. Desarrollada con Angular 20 y Server-Side Rendering (SSR).',
      technologies: ['Angular 20', 'TypeScript', 'SSR', 'SCSS', 'Express'],
      logo: 'assets/abrazamillas-logo.png',
      isMain: false
    }
  ];
}

