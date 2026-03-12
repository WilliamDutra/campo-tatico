import { Component, input, output, signal } from '@angular/core';
import { Jogador } from './jogar';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-jogador',
  imports: [CdkDrag],
  templateUrl: './jogador.component.html',
  styleUrl: './jogador.component.css',
})
export class JogadorComponent {
  jogador = input.required<Jogador>();
}
