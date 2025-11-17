import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-join-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join-group.component.html',
  styleUrl: './join-group.component.scss'
})
export class JoinGroupComponent implements OnInit {
  groupId: string | null = null;
  playStoreUrl = 'https://play.google.com/store/apps/details?id=com.sire.equigasto';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('groupId');
    
    if (!this.groupId) {
      // Si no hay groupId, redirigir a home
      this.router.navigate(['/']);
      return;
    }

    // Intentar abrir la app inmediatamente
    this.tryOpenApp();
  }

  tryOpenApp() {
    if (!this.groupId) return;

    const deepLink = `equigasto://app/join/${this.groupId}`;
    
    // Intentar abrir la app
    const link = document.createElement('a');
    link.href = deepLink;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openPlayStore() {
    window.open(this.playStoreUrl, '_blank');
  }

  copyCode() {
    if (this.groupId) {
      navigator.clipboard.writeText(this.groupId).then(() => {
        alert('Código copiado al portapapeles');
      });
    }
  }
}

