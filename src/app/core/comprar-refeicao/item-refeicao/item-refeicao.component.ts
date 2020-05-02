import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-refeicao",
  templateUrl: "./item-refeicao.component.html",
  styleUrls: ["./item-refeicao.component.scss"]
})
export class ItemRefeicaoComponent implements OnInit {
  @Input("refeicao") refeicao;
  @Output("selecionarPrato") selecionarPrato: EventEmitter<
    any
  > = new EventEmitter<any>();
  @Output("removerPrato") removerPrato: EventEmitter<any> = new EventEmitter<
    any
  >();
  @Output("atualizarValor") atualizarValor: EventEmitter<any> = new EventEmitter<any>();
  isSelected = false;
  constructor() {}

  ngOnInit(): void {
  }

  selectRefeicao() {
    if (this.refeicao.disponivel) {
      this.isSelected = !this.isSelected;
      if (this.isSelected) {
        console.log(this.refeicao);
        this.selecionarPrato.emit(this.refeicao);
      } else {
        this.removerPrato.emit(this.refeicao.id);
      }
    }
  }

  add() {
    this.refeicao.qtdPessoas++;
    this.atualizarValorRefeicao()
    this.atualizarValor.emit(this.refeicao);
  }

  sub() {
    this.refeicao.qtdPessoas--;
    this.atualizarValorRefeicao()
    this.atualizarValor.emit(this.refeicao);
  }

  atualizarValorRefeicao(){
    this.refeicao.valorTotal = this.refeicao.valorBase + (this.refeicao.qtdPessoas * this.refeicao.valorPessoa)
  }
}
