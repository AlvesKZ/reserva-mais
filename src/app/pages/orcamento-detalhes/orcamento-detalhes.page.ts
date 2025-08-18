import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrcamentoService, Orcamento } from 'src/app/services/orcamento';

@Component({
  selector: 'app-orcamento-detalhes',
  templateUrl: './orcamento-detalhes.page.html',
  styleUrls: ['./orcamento-detalhes.page.scss'],
  standalone: false,
})
export class OrcamentoDetalhesPage implements OnInit {
  valorDiaria!: number;
  quantidadeDias!: number;
  valorTotal!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orcamentoService: OrcamentoService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.valorDiaria = +params['valorDiaria'];
      this.quantidadeDias = +params['quantidadeDias'];
      this.valorTotal = +params['valorTotal'];
    });
  }

  voltar() {
    this.router.navigate(['/orcamento']);
  }

  async confirmar() {
    const novoOrcamento: Orcamento = {
      valorDiaria: this.valorDiaria,
      quantidadeDias: this.quantidadeDias,
      dataOrçamento: new Date().toLocaleString('pt-BR')
    };

    await this.orcamentoService.adicionarOrcamento(novoOrcamento);

    this.router.navigate(['/confirmacao'], {
      queryParams: { valorFinal: this.valorTotal }
    });
  }
}
