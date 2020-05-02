import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SharedModule } from "../shared/shared.module";
import { CoreRoutingModule } from "./core-routing.module";
import { ComprarRefeicaoComponent } from "./comprar-refeicao/comprar-refeicao.component";
import { ItemRefeicaoComponent } from "./comprar-refeicao/item-refeicao/item-refeicao.component";
import { LoginCadastroComponent } from "./login-cadastro/login-cadastro.component";
import { MeuPlanoComponent } from "./meu-plano/meu-plano.component";
import { ItemRefeicaoPlanoComponent } from "./meu-plano/item-refeicao-plano/item-refeicao-plano.component";
import { FinalizarCompraModalComponent } from "./comprar-refeicao/finalizar-compra-modal/finalizar-compra-modal.component";
import { PoliticasBoxComponent } from './politicas-box/politicas-box.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    ComprarRefeicaoComponent,
    ItemRefeicaoComponent,
    LoginCadastroComponent,
    MeuPlanoComponent,
    ItemRefeicaoPlanoComponent,
    FinalizarCompraModalComponent,
    PoliticasBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DatePipe],
  entryComponents: [FinalizarCompraModalComponent,PoliticasBoxComponent],
})
export class CoreModule {}
