import { Component } from '@angular/core';
import { JogadorComponent } from '../componentes/jogador/jogador.component';
import { Cartao, Jogador, OrdemCampo, Posicao, TipoCartao } from '../componentes/jogador/jogador';

@Component({
  selector: 'app-tatico',
  imports: [JogadorComponent],
  templateUrl: './tatico.component.html',
  styleUrl: './tatico.component.css',
})
export class TaticoComponent {
  jogadores: Jogador[] = [
    {
      id: 1,
      nome: 'Hugo Souza',
      camisa: 1,
      posicao: Posicao.goleiro,
      ordem_campo: OrdemCampo.goleiro,
      cartoes: [new Cartao(TipoCartao.amarelo)],
    },
    {
      id: 2,
      nome: 'Matheuzinho',
      camisa: 2,
      posicao: Posicao.lateral_direito,
      ordem_campo: OrdemCampo.lateral_direito,
      cartoes: [new Cartao(TipoCartao.amarelo), new Cartao(TipoCartao.amarelo)],
    },
    {
      id: 23,
      nome: 'Matheus Bidu',
      camisa: 23,
      posicao: Posicao.lateral_esquerdo,
      ordem_campo: OrdemCampo.lateral_esquerdo,
    },
    {
      id: 13,
      nome: 'Gustavo Henrique',
      camisa: 13,
      posicao: Posicao.zagueiro,
      ordem_campo: OrdemCampo.zagueiro_canhoto,
    },
    {
      id: 13,
      nome: 'Gabriel Paulista',
      camisa: 13,
      posicao: Posicao.zagueiro,
      ordem_campo: OrdemCampo.zagueiro_destro,
    },
    {
      id: 45,
      nome: 'Allan',
      camisa: 45,
      posicao: Posicao.volante,
      ordem_campo: OrdemCampo.volante,
    },
    {
      id: 48,
      nome: 'André Luiz',
      camisa: 28,
      posicao: Posicao.meia,
      ordem_campo: OrdemCampo.meia_destro,
    },
    {
      id: 7,
      nome: 'Breno Bidon',
      camisa: 7,
      posicao: Posicao.meia,
      ordem_campo: OrdemCampo.meia_canhoto,
    },
    {
      id: 8,
      nome: 'Rodrigo Garro',
      camisa: 8,
      posicao: Posicao.meia,
      ordem_campo: OrdemCampo.meia_canhoto,
    },
    {
      id: 10,
      nome: 'Memphis',
      camisa: 10,
      posicao: Posicao.atacante,
      ordem_campo: OrdemCampo.atacante_destro,
    },
    {
      id: 9,
      nome: 'Yuri Alberto',
      camisa: 9,
      posicao: Posicao.atacante,
      ordem_campo: OrdemCampo.atacante_canhoto,
    },
  ];

  get goleiro() {
    return this.jogadores.filter((g) => g.posicao == Posicao.goleiro)[0];
  }

  get defesa() {
    return this.jogadores
      .filter(
        (g) =>
          g.posicao == Posicao.lateral_direito ||
          g.posicao == Posicao.lateral_esquerdo ||
          g.posicao == Posicao.zagueiro,
      )
      .sort((a, b) => a.ordem_campo - b.ordem_campo);
  }

  get meio() {
    return this.jogadores
      .filter((g) => g.posicao == Posicao.meia || g.posicao == Posicao.volante)
      .sort((a, b) => a.ordem_campo - b.ordem_campo);
  }

  get ataque() {
    return this.jogadores
      .filter((g) => g.posicao == Posicao.atacante)
      .sort((a, b) => a.ordem_campo - b.ordem_campo);
  }
}
