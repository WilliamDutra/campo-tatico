import { Component } from '@angular/core';
import { JogadorComponent } from '../componentes/jogador/jogador.component';
import { Jogador, Posicao } from '../componentes/jogador/jogar';

@Component({
  selector: 'app-tatico',
  imports: [JogadorComponent],
  templateUrl: './tatico.component.html',
  styleUrl: './tatico.component.css',
})
export class TaticoComponent {
  jogadores: Jogador[] = [
    { id: 1, nome: 'Hugo Souza', camisa: 1, posicao: Posicao.goleiro },
    { id: 2, nome: 'Matheuzinho', camisa: 2, posicao: Posicao.lateral_direito },
    { id: 23, nome: 'Matheus Bidu', camisa: 23, posicao: Posicao.lateral_esquerdo },
    { id: 13, nome: 'Gustavo Henrique', camisa: 13, posicao: Posicao.zagueiro },
    { id: 13, nome: 'Gabriel Paulista', camisa: 13, posicao: Posicao.zagueiro },
    { id: 45, nome: 'Allan', camisa: 45, posicao: Posicao.volante },
    { id: 48, nome: 'André Luiz', camisa: 28, posicao: Posicao.meia },
    { id: 7, nome: 'Breno Bidon', camisa: 7, posicao: Posicao.meia },
    { id: 8, nome: 'Rodrigo Garro', camisa: 8, posicao: Posicao.meia },
    { id: 10, nome: 'Memphis', camisa: 10, posicao: Posicao.atacante },
    { id: 9, nome: 'Yuri Alberto', camisa: 9, posicao: Posicao.atacante },
  ];

  get goleiro() {
    return this.jogadores.filter((g) => g.posicao == Posicao.goleiro)[0];
  }

  get defesa() {
    return this.jogadores.filter(
      (g) =>
        g.posicao == Posicao.lateral_direito ||
        g.posicao == Posicao.lateral_esquerdo ||
        g.posicao == Posicao.zagueiro,
    );
  }

  get meio() {
    return this.jogadores.filter((g) => g.posicao == Posicao.meia || g.posicao == Posicao.volante);
  }

  get ataque() {
    return this.jogadores.filter((g) => g.posicao == Posicao.atacante);
  }
}
