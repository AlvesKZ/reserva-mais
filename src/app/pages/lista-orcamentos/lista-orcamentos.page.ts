import { Component, OnInit } from '@angular/core';
import { Orcamento, OrcamentoService } from 'src/app/services/orcamento'

@Component({
  selector: 'app-lista-orcamentos',
  templateUrl: './lista-orcamentos.page.html',
  styleUrls: ['./lista-orcamentos.page.scss'],
  standalone: false,
})
export class ListaOrcamentosPage implements OnInit {
  orcamento!: Orcamento;
  orcamentos: Orcamento[] = [];

  constructor(private orcamentoService: OrcamentoService) { }

  ngOnInit() {
    this.carregarOrcamentos();
  }

  async carregarOrcamentos() {
    this.orcamentos = await this.orcamentoService.obterOrcamentos();
  }

  async excluirOrcamento(indice: number) {
    await this.orcamentoService.excluirOrcamento(indice);
    this.carregarOrcamentos();
  }
}
