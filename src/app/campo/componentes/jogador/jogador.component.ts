import { Component, input, output, signal } from '@angular/core';
import { Jogador } from './jogar';

@Component({
  selector: 'app-jogador',
  imports: [],
  templateUrl: './jogador.component.html',
  styleUrl: './jogador.component.css',
})
export class JogadorComponent {
  jogador = input.required<Jogador>();
}
