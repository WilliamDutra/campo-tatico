export class Jogador {
  id: number;
  camisa: number;
  nome: string;
  posicao: Posicao;
  constructor(id: number, camisa: number, nome: string, posicao: Posicao) {
    this.id = id;
    this.camisa = camisa;
    this.nome = nome;
    this.posicao = posicao;
  }
}

export enum Posicao {
  goleiro,
  lateral_direito,
  lateral_esquerdo,
  volante,
  meia,
  atacante,
  zagueiro,
}
