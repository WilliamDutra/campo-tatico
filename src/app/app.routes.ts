import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'campo', pathMatch: 'full' },
  { path: 'campo', loadChildren: () => import('./campo/campo.routes').then((c) => c.CAMPO_ROUTES) },
];
