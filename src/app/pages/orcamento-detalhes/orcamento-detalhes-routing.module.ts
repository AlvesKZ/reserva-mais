import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrcamentoDetalhesPage } from './orcamento-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: OrcamentoDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrcamentoDetalhesPageRoutingModule {}
