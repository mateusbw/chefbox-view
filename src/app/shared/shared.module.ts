import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { AdicionarPessoasBadgeComponent } from "./adicionar-pessoas-badge/adicionar-pessoas-badge.component";
import { ClickStopPropagationDirective } from "./click-stop-propagation.directive";
import { RouterModule } from "@angular/router";
import { InputComponent } from "./input/input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorMessagePipe } from "./input/error-message.pipe";
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [
    NavbarComponent,
    AdicionarPessoasBadgeComponent,
    ClickStopPropagationDirective,
    InputComponent,
    ErrorMessagePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ],
  exports: [NavbarComponent, AdicionarPessoasBadgeComponent, InputComponent, ClickStopPropagationDirective]
})
export class SharedModule {}
