export class ErrorMessageResource {
  private resources: any;

  constructor() {
    this.resources = {
      required: "* Campo obrigatório",
      email: "E-mail inválido.",
      minlength: "Deve conter no mínimo 6 caracteres.",
      equalPassword: "Senhas não são compatíveis.",
      invalidCPF: 'CPF inválido.',
      cupomInvalido: "Cupom de desconto inválido."
    };
  }

  public getMessage(key) {
    return this.resources[key];
  }
}
