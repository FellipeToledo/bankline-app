import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorrentistaComponent } from './components/correntista/correntista.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { MovimentacaoTableComponent } from './components/movimentacao-table/movimentacao-table.component';

const routes: Routes = [
  { path: 'movimentacoes-new', component: MovimentacaoNewComponent },
  { path: 'movimentacoes', component: MovimentacaoTableComponent },
  { path: 'correntistas', component: CorrentistaComponent },
  { path: '', redirectTo: 'movimentacoes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
