import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ValidateCpf, ValidateEqualPassword } from "src/app/shared/Validators/validators";

@Component({
  selector: "app-login-cadastro",
  templateUrl: "./login-cadastro.component.html",
  styleUrls: ["./login-cadastro.component.scss"]
})
export class LoginCadastroComponent implements OnInit {
  loginForm: FormGroup;
  cadastroForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      senha: ["", Validators.required]
    });
    this.cadastroForm = this.fb.group({
      nomeCompleto: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [ValidateCpf]],
      telefone: [""],
      senha: ["", [Validators.required, Validators.minLength(6)]],
      senhaConfirmacao: ["", ValidateEqualPassword]
    });
  }

  ngOnInit(): void {}

  login() {
    console.log(this.loginForm.value);
  }
  cadastrar() {
    console.log(this.cadastroForm.value);
  }
}
