import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'orcamento',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'orcamento',
    pathMatch: 'full'
  },
  {
    path: 'orcamento',
    loadChildren: () => import('./pages/orcamento/orcamento.module').then( m => m.OrcamentoPageModule)
  },  {
    path: 'orcamento-detalhes',
    loadChildren: () => import('./pages/orcamento-detalhes/orcamento-detalhes.module').then( m => m.OrcamentoDetalhesPageModule)
  },
  {
    path: 'confirmacao',
    loadChildren: () => import('./pages/confirmacao/confirmacao.module').then( m => m.ConfirmacaoPageModule)
  },
  {
    path: 'lista-orcamentos',
    loadChildren: () => import('./pages/lista-orcamentos/lista-orcamentos.module').then( m => m.ListaOrcamentosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
