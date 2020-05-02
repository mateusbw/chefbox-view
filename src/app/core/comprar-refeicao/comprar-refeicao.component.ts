import { Component, OnInit } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { FinalizarCompraModalComponent } from "./finalizar-compra-modal/finalizar-compra-modal.component";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { CupomDescontoService } from "src/app/shared/Client/cupomDesconto.service";
import { PoliticasBoxComponent } from "../politicas-box/politicas-box.component";
import { ToastrService } from "ngx-toastr";
import { RefeicoesService } from "./../../shared/Client/refeicoes.service";
import { DatePipe } from "@angular/common";
import * as moment from "moment/moment";

@Component({
  selector: "app-comprar-refeicao",
  templateUrl: "./comprar-refeicao.component.html",
  styleUrls: ["./comprar-refeicao.component.scss"],
})
export class ComprarRefeicaoComponent implements OnInit {
  refeicoesSemana = [];
  compra = {
    tipoCaixa: 0,
    refeicoes: [],
    box: 10,
    subtotal: 0,
    cupom: { valor: 0 },
    valorDesconto: 0,
    valorEntrega: 0,
    total: 0,
  };
  discountForm: FormGroup;
  constructor(
    private bsModalService: BsModalService,
    private fb: FormBuilder,
    private refeicoesService: RefeicoesService,
    private cupomDescontoService: CupomDescontoService,
    private toastrService: ToastrService,
    private datePipe: DatePipe
  ) {
    this.discountForm = this.fb.group({
      codigo: [],
    });
    this.refeicoesService.index().subscribe((resp) => {
      this.refeicoesSemana = resp.map((ref) => ({
        ...ref,
        dia: this.datePipe.transform(ref.dia, "EEEE", "+0300"),
        qtdPessoas: 2,
        valorTotal: ref.valorBase + ref.valorPessoa * 2,
        disponivel: !moment(ref.dia)
          .add(3, "hours")
          .subtract(1, "day")
          .endOf("day")
          .subtract(2, "hours")
          .isBefore(moment()),
      }));
    });
  }

  ngOnInit(): void {
    this.calcularTotal();
  }

  selecionarPrato(prato) {
    this.compra.refeicoes.push(prato);
    this.atualizarCompra();
  }
  removerPrato(idPrato) {
    this.compra.refeicoes = this.compra.refeicoes.filter(
      (p) => p.id != idPrato
    );
    this.atualizarCompra();
  }

  atualizarValor(prato) {
    this.atualizarCompra();
  }

  calcularTotal() {
    this.compra.valorDesconto =
      (this.compra.subtotal * this.compra.cupom.valor) / 100;
    this.compra.total =
      this.compra.subtotal +
      this.compra.valorEntrega -
      this.compra.valorDesconto;
  }

  atualizarCompra() {
    this.compra.subtotal = this.compra.refeicoes.reduce(
      (total, ref) => total + ref.valorTotal,
      0
    );
    this.compra.valorEntrega = 5 * this.compra.refeicoes.length;
    this.calcularTotal();
  }

  finalizarCompra() {
    this.bsModalService.show(FinalizarCompraModalComponent, {
      class: "modal-xl",
      initialState: { resumoCompra: this.compra },
    });
  }

  validarCupom() {
    const codigoInput = this.discountForm.get("codigo") as FormControl;
    this.cupomDescontoService.find(codigoInput.value).subscribe(
      (resp) => {
        this.toastrService.success(`Cupom válido de ${resp.valor}%`);
        this.compra.cupom = resp;
        this.calcularTotal();
      },
      (resp) => {
        this.toastrService.error(resp.error.message);
        codigoInput.setErrors({ cupomInvalido: true });
      }
    );
  }

  selecionarBox(input) {
    this.compra.box = input.checked ? 0 : 10;
    this.compra.tipoCaixa = input.checked ? 1 : 0;
    this.calcularTotal();
  }

  openPoliticasBox() {
    this.bsModalService.show(PoliticasBoxComponent, { class: "modal-md" });
  }
}
