import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BsModalRef } from "ngx-bootstrap/modal";
import { ValidateCpf } from "src/app/shared/Validators/validators";
import { ViaCepService } from "./../../../shared/Client/viacep.service";
import { ClienteService } from "./../../../shared/Client/cliente.service";
import { PedidosService } from "./../../../shared/Client/pedidos.service";
import { Router } from "@angular/router";
import Swal, { SweetAlertType } from "sweetalert2";

@Component({
  selector: "app-finalizar-compra-modal",
  templateUrl: "./finalizar-compra-modal.component.html",
  styleUrls: ["./finalizar-compra-modal.component.scss"],
})
export class FinalizarCompraModalComponent implements OnInit {
  compraForm: FormGroup;
  resumoCompra: any = {};
  constructor(
    private fb: FormBuilder,
    public bsModalRef: BsModalRef,
    private viaCepService: ViaCepService,
    private clienteService: ClienteService,
    private pedidosService: PedidosService,
    private router: Router
  ) {
    this.compraForm = this.fb.group({
      cpf: ["", [Validators.required, ValidateCpf]],
      nome: ["", [Validators.required]],
      enderecoCep: ["", [Validators.required]],
      enderecoLogradouro: ["", [Validators.required]],
      enderecoComplemento: [""],
      enderecoBarrio: ["", [Validators.required]],
      enderecoNumero: [""],
      email: ["", [Validators.required, Validators.email]],
      telefone: ["", [Validators.required]],
      enderecoUf: "",
      enderecoLocalidade: "",
    });
  }

  ngOnInit(): void {
    this.resumoCompra.box = 0;
  }

  buscarCep() {
    this.viaCepService
      .getAdress(this.compraForm.get("enderecoCep").value)
      .subscribe((resp: any) => {
        this.compraForm.patchValue({
          enderecoCep: resp.cep,
          enderecoLogradouro: resp.logradouro,
          enderecoBarrio: resp.bairro,
          enderecoUf: resp.uf,
          enderecoLocalidade: resp.localidade,
        });
      });
  }
  buscarCliente() {
    const cpf = this.compraForm.get("cpf").value;
    if (this.compraForm.get("cpf").valid) {
      this.clienteService.find(cpf).subscribe(
        (resp) => {
          this.compraForm.patchValue(resp);
        },
        (error) => {
          this.compraForm.reset();
          this.compraForm.get("cpf").setValue(cpf);
        }
      );
    }
  }

  confirmarCompra() {
    if (this.compraForm.valid) {
      this.pedidosService
        .create({
          refeicoes: this.resumoCompra.refeicoes.map((r) => ({
            quantidadePessoas: r.qtdPessoas,
            refeicaoId: r.id,
          })),
          tipoCaixa: this.resumoCompra.tipoCaixa,
          cupomDesconto: this.resumoCompra.cupom
            ? this.resumoCompra.cupom.id
            : "",
          cliente: this.compraForm.value,
        })
        .subscribe((resp) => {
          this.bsModalRef.hide();
          Swal.fire({
            title: "Compra Realizada!!",
            text:
              "Obrigado, Sua compra foi realizada! Logo entraremos em contato com você pelo número e e-mail informados. Qualquer dúvida estamos disponíveis através de nosso instagram e do e-mail: chefboxbrasil@gmail.com. Att: Equipe Chef Box.",
            type: "success",
            showConfirmButton: true,
          });
          this.router.navigateByUrl("/");
        });
    } else {
      this.compraForm.markAllAsTouched();
      Swal.fire({
        title: "Ops!!",
        text:
          "Ocorreu um erro na sua compra. Estamos trabalhando para concertá-lo. Por favor, tente novamente mais tarde",
        type: "error",
        showConfirmButton: false,
        timer: 2000
      });
    }
  }
}
