import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-equigasto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './equigasto.component.html',
  styleUrl: './equigasto.component.scss'
})
export class EquigastoComponent {
  project = {
    title: 'EquiGasto',
    description: 'Mi primer proyecto móvil. Una aplicación Flutter para reparto de gastos similar a Splitwise, desarrollada siguiendo Clean Architecture. Incluye autenticación, gestión de grupos, gastos y sistema de deudas.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Clean Architecture'],
    logo: 'assets/equigasto-logo.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sire.equigasto'
  };
}

