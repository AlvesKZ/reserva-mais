import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Orcamento, OrcamentoService } from 'src/app/services/orcamento';

@Component({
  selector: 'app-lista-orcamentos',
  templateUrl: './lista-orcamentos.page.html',
  styleUrls: ['./lista-orcamentos.page.scss'],
  standalone: false,
})
export class ListaOrcamentosPage implements OnInit {
  orcamentos: Orcamento[] = [];

  constructor(
    private orcamentoService: OrcamentoService,
    private router: Router,
    private location: Location,
  ) {}

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

  voltar() {
    this.location.back();
  }
}
