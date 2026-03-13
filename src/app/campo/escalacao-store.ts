import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Jogador, OrdemCampo, Posicao } from './componentes/jogador/jogador';

@Injectable({
  providedIn: 'root',
})
export class EscalacaoStore {
  private readonly _data = new BehaviorSubject<Jogador[]>([]);

  public readonly data$ = this._data.asObservable();

  public adicionarJogador(camisa: number, nome: string, posicao: Posicao, ordemCampo: OrdemCampo) {
    const novoJogador = new Jogador(camisa, camisa, nome, posicao, ordemCampo);
    const jogadores = [...this._data.getValue(), novoJogador];
    this._data.next(jogadores);
  }
}
