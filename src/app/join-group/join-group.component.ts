import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

type AppType = 'equigasto' | 'dojotime' | 'escaperadar';

interface AppConfig {
  name: string;
  description: string;
  logo: string;
  playStoreUrl: string;
  deepLinkScheme: string;
  installCta: string;
}

const APP_CONFIG: Record<AppType, AppConfig> = {
  equigasto: {
    name: 'EquiGasto',
    description: 'Has sido invitado a unirte a un grupo en EquiGasto.',
    logo: 'assets/equigasto-logo.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sire.equigasto',
    deepLinkScheme: 'equigasto://app/join/',
    installCta: 'Instalar EquiGasto'
  },
  dojotime: {
    name: 'DojoTime',
    description: 'Has sido invitado a unirte al dojo en DojoTime.',
    logo: 'assets/dojotime-logo.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sire.dojotime',
    deepLinkScheme: 'dojotime://app/join/',
    installCta: 'Instalar DojoTime'
  },
  escaperadar: {
    name: 'EscapeRadar',
    description: 'Has sido invitado a unirte a un grupo en EscapeRadar.',
    logo: 'assets/sireprojects-logo.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sire.escaperadar',
    deepLinkScheme: 'escaperadar://groups/join/',
    installCta: 'Instalar EscapeRadar'
  }
};

@Component({
  selector: 'app-join-group',
  standalone: true,
  imports: [],
  templateUrl: './join-group.component.html',
  styleUrl: './join-group.component.scss'
})
export class JoinGroupComponent implements OnInit {
  groupId: string | null = null;
  appConfig: AppConfig = APP_CONFIG.equigasto;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.resolveAppConfig();
    this.groupId = this.route.snapshot.paramMap.get('groupId');
    
    if (!this.groupId) {
      // Si no hay groupId, redirigir a home
      this.router.navigate(['/']);
      return;
    }

  }

  private resolveAppConfig() {
    const routeApp = this.route.snapshot.data['app'] as AppType | undefined;
    if (routeApp && APP_CONFIG[routeApp]) {
      this.appConfig = APP_CONFIG[routeApp];
      return;
    }

    // Fallback: detectar por URL
    const isDojoTime = window.location.pathname.includes('/dojotime/');
    const isEscapeRadar = window.location.pathname.includes('/escaperadar/');
    if (isDojoTime) {
      this.appConfig = APP_CONFIG.dojotime;
    } else if (isEscapeRadar) {
      this.appConfig = APP_CONFIG.escaperadar;
    } else {
      this.appConfig = APP_CONFIG.equigasto;
    }
  }

  tryOpenApp(userInitiated = false) {
    if (!this.groupId) return;

    const deepLink = `${this.appConfig.deepLinkScheme}${this.groupId}`;
    
    // Intentar abrir la app redirigiendo la ubicación actual
    window.location.href = deepLink;

    // Si el usuario lo solicitó manualmente, mostrar fallback tras un breve tiempo
    if (userInitiated) {
      setTimeout(() => {
        const isStillVisible = document.visibilityState === 'visible';
        if (isStillVisible) {
          this.openPlayStore();
        }
      }, 1800);
    }
  }

  openPlayStore() {
    window.open(this.appConfig.playStoreUrl, '_blank');
  }

  copyCode() {
    if (this.groupId) {
      navigator.clipboard.writeText(this.groupId).then(() => {
        alert('Código copiado al portapapeles');
      });
    }
  }
}

