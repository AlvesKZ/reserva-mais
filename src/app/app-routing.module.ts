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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
