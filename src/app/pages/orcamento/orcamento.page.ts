import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.page.html',
  styleUrls: ['./orcamento.page.scss'],
  standalone: false,
})
export class OrcamentoPage implements OnInit {
  valorDiaria: number = 0;
  quantidadeDias: number = 1;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  obterTotal(): number {
    return this.valorDiaria * this.quantidadeDias;
  }

  calcularOrcamento() {
    if (!this.valorDiaria || this.valorDiaria <= 0) {
      return;
    }

    this.router.navigate(['/orcamento-detalhes'], {
      queryParams: {
        valorDiaria: this.valorDiaria,
        quantidadeDias: this.quantidadeDias,
        valorTotal: this.obterTotal()
      }
    });
  }

  limparFormulario() {
    this.valorDiaria = 0;
    this.quantidadeDias = 1;
  }

  verListaCompleta() {
    this.router.navigate(['/lista-orcamentos']);
  }

  formularioValido(): boolean {
    return this.valorDiaria > 0 && this.quantidadeDias >= 1;
  }
}
