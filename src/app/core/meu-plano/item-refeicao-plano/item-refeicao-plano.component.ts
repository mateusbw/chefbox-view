import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-refeicao-plano",
  templateUrl: "./item-refeicao-plano.component.html",
  styleUrls: ["./item-refeicao-plano.component.scss"]
})
export class ItemRefeicaoPlanoComponent implements OnInit {
  @Input("refeicao") refeicao;
  @Input("isSelected") isSelected = false;
  @Output("selecionarPrato") selecionarPrato: EventEmitter<
    any
  > = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  selectRefeicao() {
    this.selecionarPrato.emit(this.refeicao.id);
  }
}
