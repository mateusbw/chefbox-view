import { Component, OnInit } from "@angular/core";
import { MessageAlertService } from "src/app/shared/message-alert/message-alert.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-meu-plano",
  templateUrl: "./meu-plano.component.html",
  styleUrls: ["./meu-plano.component.scss"]
})
export class MeuPlanoComponent implements OnInit {
  refeicoesOpcao = [
    {
      id: 1,
      dia: "Segunda-Feira",
      imgUrl: "assets/imgs/pratos/peito-de-frango-grelhado.jpg",
      titulo: "Frango grelhado com batata assada",
      descricao: "apenas 30 minutos de preparo e acompanha tomate e abobrinha"
    },
    {
      id: 2,
      dia: "Terça-Feira",
      imgUrl: "assets/imgs/pratos/hamburguer-de-frango.jpg",
      titulo: "Hambúrguer de cupim com molho especial",
      descricao: "apenas 20 minutos de preparo e acompanha porção de fritas"
    },
    {
      id: 3,
      dia: "Quarta-Feira",
      imgUrl: "assets/imgs/pratos/lasanha-classica.jpg",
      titulo: "Lasanha de carne moída e molho vermelho",
      descricao: "apenas 30 minutos de preparo e acompanha ervas"
    },
    {
      id: 4,
      dia: "Quinta-Feira",
      titulo: "Quesadilla mexicana com legumes",
      descricao: "apenas 20 minutos de preparo e acompanha molho e legumes",
      imgUrl: "assets/imgs/pratos/quesadilla-mexicano.jpg"
    },
    {
      id: 5,
      dia: "Sexta-Feira",
      titulo: "Salada de legumes com frango e nozes",
      descricao: "apenas 30 minutos de preparo e acompanha tomate e abobrinha",
      imgUrl: "assets/imgs/pratos/salada-de-legumes.jpg"
    },
    {
      id: 6,
      dia: "Sábado",
      titulo: "Camarão com curry vermelho",
      descricao: "apenas 30 minutos de preparo e acompanha tomate e abobrinha",
      imgUrl: "assets/imgs/pratos/camarao.jpg"
    }
  ];
  refeicoesSelecionadas = [1, 2];
  qtdRefeicoes = 2;
  constructor(
    private messageAlert: MessageAlertService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  get qtdRefeicoesSelecionadas() {
    return this.refeicoesSelecionadas.length;
  }

  selecionarPrato(refId) {
    if (this.qtdRefeicoesSelecionadas >= this.qtdRefeicoes) {
      this.messageAlert.addConfirmYesNo(
        "Você já escolheu o número de refeições permitidas no seu plano. Você pode comprar uma refeição avulsa clicando no botão abaixo!",
        () => {}
      );
    } else {
      this.refeicoesSelecionadas.push(refId);
      if (this.qtdRefeicoesSelecionadas == 2) {
        this.toastr.success("Dia alterado!");
      }
    }
  }

  removerPrato(refId) {
    this.refeicoesSelecionadas = this.refeicoesSelecionadas.filter(refid => {
      return refid != refId;
    });
  }

  showRefCardapio(refId) {
    return (
      this.refeicoesSelecionadas.findIndex(refid => {
        return refid == refId;
      }) == -1
    );
  }
  showRefSelecionado(refId) {
    return (
      this.refeicoesSelecionadas.findIndex(refid => {
        return refid == refId;
      }) >= 0
    );
  }
}
