import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BsModalRef } from "ngx-bootstrap/modal";
import { ValidateCpf } from "src/app/shared/Validators/validators";
import { ViaCepService } from "./../../../shared/Client/viacep.service";
import { ClienteService } from "./../../../shared/Client/cliente.service";
import { PedidosService } from "./../../../shared/Client/pedidos.service";
import { Router } from "@angular/router";
import Swal, { SweetAlertType } from "sweetalert2";
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastrServi: ToastrService
  ) {
    this.compraForm = this.fb.group({
      cpf: ["", [Validators.required, ValidateCpf]],
      nome: ["", [Validators.required]],
      enderecoCep: ["", [Validators.required]],
      enderecoLogradouro: ["", [Validators.required]],
      enderecoComplemento: ["", [Validators.required]],
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
        if(resp.localidade !== 'Anápolis'){
          Swal.fire({
            title: "Ainda não chegamos aí!",
            text:
              "Desculpe, mas por enquanto só estamos fazendo entregas na cidade de Anápolis. Mas fique ligado, logo logo a Chef Box estará na sua cidade!",
            type: "info",
            showConfirmButton: true,
          });
        }else{
          this.compraForm.patchValue({
            enderecoCep: resp.cep,
            enderecoLogradouro: resp.logradouro,
            enderecoBarrio: resp.bairro,
            enderecoUf: resp.uf,
            enderecoLocalidade: resp.localidade,
          });
        }
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
              "Obrigado, Sua compra foi realizada! Logo entraremos em contato com você para realização do pagamento. Qualquer dúvida estamos disponíveis através do whatsapp (62) 9913-8651 e do e-mail: chefboxbrasil@gmail.com. Att: Equipe Chef Box.",
            type: "success",
            showConfirmButton: true,
          });
          this.router.navigateByUrl("/");
        },(error)=>{
          Swal.fire({
            title: "Ocorreu um erro!",
            text:
              "Desculpe pelo imprevisto. Estamos em constante evolução para melhor atende-los. Nos informe sobre seu erro através do whatsapp (62) 9913-8651. Obrigado pela compreensão. ",
            type: "error",
            showConfirmButton: true,
          });
        });
    } else {
      this.compraForm.markAllAsTouched();
      this.toastrServi.error("Erro nos dados!")
    }
  }
}
