import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orcamento, OrcamentoService } from 'src/app/services/orcamento';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.page.html',
  styleUrls: ['./orcamento.page.scss'],
  standalone: false,
})
export class OrcamentoPage implements OnInit {
  valorDiaria: number = 0;
  quantidadeDias: number = 1;

  orcamentos: Orcamento[] = [];
  orcamento: Orcamento = { valorDiaria: 0, quantidadeDias: 0 };
  indiceEdicao = -1;

  constructor(
    private orcamentoService: OrcamentoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarOrcamentos();
  }

  ionViewWillEnter() {
    this.carregarOrcamentos();
  }

  async carregarOrcamentos() {
    try {
      this.orcamentos = await this.orcamentoService.obterOrcamentos();
    } catch (error) {
      console.error('Erro ao carregar orçamentos:', error);
    }
  }

  obterTotal(): number {
    return this.valorDiaria * this.quantidadeDias;
  }

  calcularOrcamento() {
    if (!this.valorDiaria || this.valorDiaria <= 0) {
      return;
    }

    this.router.navigate(['/detalhes-orcamento'], {
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
