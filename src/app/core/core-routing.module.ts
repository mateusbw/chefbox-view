import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComprarRefeicaoComponent } from './comprar-refeicao/comprar-refeicao.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { MeuPlanoComponent } from './meu-plano/meu-plano.component';

const routes: Routes = [
  { path: "", pathMatch: "prefix", redirectTo: "home" },
  { path: "home", component: LandingPageComponent},
  { path: "comprar-refeicao-avulsa", component: ComprarRefeicaoComponent},
  { path: "meu-plano", component: MeuPlanoComponent},
  { path: "login", component: LoginCadastroComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
