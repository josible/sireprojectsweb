import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
      technologies: ['Angular 21', 'TypeScript', 'SSR', 'SCSS', 'Express'],
      logo: 'assets/abrazamillas-logo.png',
      isMain: false
    },
    {
      title: 'DojoTime',
      description: 'Plataforma Flutter para escuelas y dojos que centraliza reservas, pases y horarios. Incluye autenticación con Firebase, gestión multi-tenant, deep links para invitaciones y controles remotos de versión para mantener la app siempre actualizada.',
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Remote Config', 'App Links'],
      logo: 'assets/dojotime-logo.png',
      isMain: false
    }
  ];
}

