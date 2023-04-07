import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProdutosComponent } from './components/produto/listar-produtos/listar-produtos.component';
import { HomeComponent } from './template/home/home.component';
import { CadastrarProdutoComponent } from './components/produto/listar-produtos/cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'produtos', component:ListarProdutosComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
