import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isJoinRoute = false;

  projects = [
    {
      title: 'EquiGasto',
      description: 'Mi primer proyecto móvil. Una aplicación Flutter para reparto de gastos similar a Splitwise, desarrollada siguiendo Clean Architecture. Incluye autenticación, gestión de grupos, gastos y sistema de deudas.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Clean Architecture'],
      logo: 'assets/equigasto-logo.png',
      isMain: true
    }
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isJoinRoute = event.url.startsWith('/join/');
      });
  }
}
