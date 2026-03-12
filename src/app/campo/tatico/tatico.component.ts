import { Component } from '@angular/core';
import { JogadorComponent } from '../componentes/jogador/jogador.component';

@Component({
  selector: 'app-tatico',
  imports: [JogadorComponent],
  templateUrl: './tatico.component.html',
  styleUrl: './tatico.component.css',
})
export class TaticoComponent {}
