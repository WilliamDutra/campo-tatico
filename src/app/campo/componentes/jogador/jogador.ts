export class Jogador {
  id: number;
  camisa: number;
  nome: string;
  posicao: Posicao;
  ordem_campo: OrdemCampo;
  cartoes?: Cartao[];
  constructor(id: number, camisa: number, nome: string, posicao: Posicao, ordem_campo: OrdemCampo) {
    this.id = id;
    this.camisa = camisa;
    this.nome = nome;
    this.posicao = posicao;
    this.ordem_campo = ordem_campo;
    this.cartoes = [];
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

export enum OrdemCampo {
  goleiro = 1,
  lateral_direito = 5,
  lateral_esquerdo = 2,
  zagueiro_destro = 3,
  zagueiro_canhoto = 4,
  meia_canhoto = 6,
  volante = 7,
  meia_destro = 8,
  atacante_canhoto = 9,
  atacante_destro = 10,
}

export enum TipoCartao {
  amarelo,
  vermelho,
}

export class Cartao {
  tipo: TipoCartao;
  constructor(tipo: TipoCartao) {
    this.tipo = tipo;
  }
}
