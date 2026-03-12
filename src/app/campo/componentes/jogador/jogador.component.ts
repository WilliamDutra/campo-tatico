import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-jogador',
  imports: [],
  templateUrl: './jogador.component.html',
  styleUrl: './jogador.component.css',
})
export class JogadorComponent {
  nome = input.required();
  camisa = input.required();
}
