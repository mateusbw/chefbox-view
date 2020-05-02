import { Component, OnInit } from "@angular/core";
import { RefeicoesService } from "src/app/shared/Client/refeicoes.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  cardapioSemana = [];
  constructor(private refeicaoService: RefeicoesService) {}

  ngOnInit(): void {
    this.refeicaoService.index().subscribe((resp) => {
      this.cardapioSemana = resp.map((r) => ({ ...r.prato, dia: r.dia }));
    });
  }
}
