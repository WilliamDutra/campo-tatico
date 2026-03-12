import { Component, input, output, signal } from '@angular/core';
import { Jogador, TipoCartao } from './jogador';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-jogador',
  imports: [CdkDrag],
  templateUrl: './jogador.component.html',
  styleUrl: './jogador.component.css',
})
export class JogadorComponent {
  jogador = input.required<Jogador>();

  get temCartoes(): boolean {
    return this.jogador().cartoes?.length != null;
  }

  get cartoesAmarelos() {
    return this.jogador().cartoes?.filter((c) => c.tipo == TipoCartao.amarelo).length;
  }

  get cartoesVermelhos() {
    return this.jogador().cartoes?.filter((c) => c.tipo == TipoCartao.vermelho).length;
  }
}
