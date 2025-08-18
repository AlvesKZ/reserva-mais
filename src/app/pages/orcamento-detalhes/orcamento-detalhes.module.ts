import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrcamentoDetalhesPageRoutingModule } from './orcamento-detalhes-routing.module';

import { OrcamentoDetalhesPage } from './orcamento-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrcamentoDetalhesPageRoutingModule
  ],
  declarations: [OrcamentoDetalhesPage]
})
export class OrcamentoDetalhesPageModule {}
