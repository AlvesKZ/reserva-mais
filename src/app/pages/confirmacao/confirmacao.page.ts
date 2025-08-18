import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orcamento, OrcamentoService } from 'src/app/services/orcamento';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.page.html',
  styleUrls: ['./confirmacao.page.scss'],
  standalone: false,
})
export class ConfirmacaoPage implements OnInit {
  valorFinal!: number;
  novoOrcamento!: Orcamento;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.valorFinal = +params['valorFinal'];
    });
  }

  verLista() {
    this.router.navigate(['lista-orcamentos']);
  }

  novaReserva() {
    this.router.navigate(['orcamento']);
  }

}
