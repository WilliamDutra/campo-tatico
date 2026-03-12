import { Route } from '@angular/router';
import { TaticoComponent } from './tatico/tatico.component';
import { EscalacaoComponent } from './escalacao/escalacao.component';

export const CAMPO_ROUTES: Route[] = [
  { path: '', redirectTo: 'tatico', pathMatch: 'full' },
  { path: 'tatico', component: TaticoComponent },
  { path: 'escalcao', component: EscalacaoComponent },
];
