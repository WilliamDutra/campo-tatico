import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Jogador } from './jogador';

@Component({
  selector: 'app-escalacao',
  imports: [ReactiveFormsModule],
  templateUrl: './escalacao.component.html',
  styleUrl: './escalacao.component.css',
})
export class EscalacaoComponent {
  escalacaoForm: FormGroup = new FormGroup({
    camisa: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
  });

  jogadores: Jogador[] = [];

  adicionar() {
    const { camisa, nome } = this.escalacaoForm.value;
    this.jogadores.push(new Jogador(camisa, nome));
  }
}
