import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Jogador } from './jogador';
import { RouterLink } from '@angular/router';
import { EscalacaoStore } from '../escalacao-store';
import { Posicao } from '../componentes/jogador/jogador';

@Component({
  selector: 'app-escalacao',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './escalacao.component.html',
  styleUrl: './escalacao.component.css',
})
export class EscalacaoComponent {
  private escalacaoStore: EscalacaoStore = inject(EscalacaoStore);

  private index: number = 0;

  escalacaoForm: FormGroup = new FormGroup({
    camisa: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    posicao: new FormControl('', [Validators.required]),
  });

  jogadores: Jogador[] = [];

  posicoes = Object.keys(Posicao)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      label: key,
      value: Posicao[key as keyof typeof Posicao],
    }));

  adicionar() {
    if (this.escalacaoForm.invalid) {
      return;
    }
    const { camisa, nome, posicao } = this.escalacaoForm.value;
    this.jogadores.push(new Jogador(camisa, nome));
    this.escalacaoStore.adicionarJogador(camisa, nome, posicao, this.index++);
    this.escalacaoForm.reset();
  }
}
