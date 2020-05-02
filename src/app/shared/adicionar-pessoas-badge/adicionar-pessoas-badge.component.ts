import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-adicionar-pessoas-badge",
  templateUrl: "./adicionar-pessoas-badge.component.html",
  styleUrls: ["./adicionar-pessoas-badge.component.scss"]
})
export class AdicionarPessoasBadgeComponent implements OnInit {
  number = 2;
  @Output("addEvent") addEvent = new EventEmitter<any>();
  @Output("subEvent") subEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  add() {
    if (this.number <= 5) {
      this.number++;
      this.addEvent.emit();
    }
  }
  sub() {
    if (this.number >= 3) {
      this.number--;
      this.subEvent.emit();
    }
  }
}
