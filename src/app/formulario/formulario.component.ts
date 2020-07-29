import { Component } from '@angular/core';
import { Inscricao } from '../model/inscricao';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  obterEstiloBotao() {
    return {
      backgroundColor: 'rgba(195, 0, 255, 0.349)',
      padding: '8px',
      width: '20%',
      border: 'none',
      borderRadius: '4px',
      display: 'inline-block'
    }
  }

  obterEstiloTitulo() {
    return {
      backgroundColor: 'rgba(195, 0, 255, 0.349)'
    }
  }

  obterClassesRodape() {
    return ['rodape']
  }

  nrInscricao: number;

  gerarNrInscricao(): void {
      this.nrInscricao = Math.round(Math.random() * 100) + 1;
  }

  obterClassesNrInscricao() {
    return ['classeInscricao']
  }

  obterClassesCartao() {
    return ['cartao']
  }

  constructor() { }

  cursos = ['ADS', 'Eventos', 'Gecom', 'RH'];

  inscricao: Inscricao = new Inscricao();

  salvar(inscricaoForm): void {
    this.inscricao.nome = inscricaoForm.value.nome;
    this.inscricao.idade = inscricaoForm.value.idade;
    this.inscricao.curso = inscricaoForm.value.curso;

    console.log(this.inscricao);
  }

}
