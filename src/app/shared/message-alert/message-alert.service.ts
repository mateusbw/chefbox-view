import { Injectable } from "@angular/core";
import Swal, { SweetAlertType } from "sweetalert2";

/**
 * Interface 'Listener' que determina o contrato da função callback referente ao 'confirm'.
 *
 */
export interface ConfirmListener {
  (): void;
}

/**
 * Classe 'service' responsável por prover o recurso de mensagem da aplicação.
 *
 */
@Injectable({ providedIn: "root" })
export class MessageAlertService {
  public static CONFIRM_TYPE_OK = "confirm_ok";
  public static CONFIRM_TYPE_YES_NO = "confirm_yes_no";

  /**
   * Construtor da classe.
   */
  constructor() {}

  private getAlertTitle(type: SweetAlertType) {
    switch (type) {
      case "info":
        return "Infomação!";
      case "error":
        return "Erro!";
      case "success":
        return "Sucesso!";
      case "warning":
        return "Atenção!";
      case "question":
        return "Tem certeza?!";
    }
  }

  /**
   * Adiciona a mensagem segundo o type (alert-success, alert-info, alert-warning e alert-error, alert-question), informado.
   *
   * @param msg
   * @param type
   * @param params
   */
  private addMsg(msg: string, type: SweetAlertType, params?: any): void {
    const swal = Swal.mixin({
      customClass: {
        title: `font-weight-bold text-${type == "error" ? "danger" : type}`
      }
    });
    swal.fire({
      title: this.getAlertTitle(type),
      text: msg,
      type: type,
      showConfirmButton: false,
      timer: 2000
    });
  }

  /**
   * Adiciona o modal de confirmação segundo o type (confirm_ok, confirm_yes_no), informado.
   *
   * @param msg
   * @param type
   * @param params
   */
  private addConfirm(
    msg: string,
    type: SweetAlertType,
    confirmType: string,
    confirm_yes: ConfirmListener,
    confirm_no?: ConfirmListener,
    params?: any
  ): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-secondary px-5",
        cancelButton: "btn btn-clear"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Tem certeza?",
        text: msg,
        type: type,
        showConfirmButton: true,
        confirmButtonText: `${
          confirmType === MessageAlertService.CONFIRM_TYPE_YES_NO ? "Sim" : "Ok"
        }`,
        showCancelButton: true,
        cancelButtonText: "Cancelar"
      })
      .then(result => {
        if (result.value) {
          console.log(confirm_yes);
          confirm_yes();
        } else {
          confirm_no();
        }
      });
  }

  /**
   * Adiciona mensagem de Sucesso.
   *
   * @param msg
   * @param params
   */
  public addMsgSuccess(msg: string, params?: any): void {
    this.addMsg(msg, "success", params);
  }

  /**
   * Adiciona mensagem de Informação.
   *
   * @param msg
   * @param params
   */
  public addMsgInf(msg: string, params?: any): void {
    this.addMsg(msg, "info", params);
  }

  /**
   * Adiciona mensagem de Alerta.
   *
   * @param msg
   * @param params
   */
  public addMsgWarning(msg: string, params?: any): void {
    this.addMsg(msg, "warning", params);
  }

  /**
   * Adiciona mensagem de Erro.
   *
   * @param msg
   * @param params
   */
  public addMsgError(msg: string, params?: any): void {
    this.addMsg(msg, "error", params);
  }

  /**
   * Adiciona o modal de confirmação YES/NO.
   *
   * @param msg
   * @param listenerYes
   * @param listenerNo
   * @param params
   */
  public addConfirmYesNo(
    msg: string,
    confirm_yes: ConfirmListener,
    confirm_no?: ConfirmListener,
    params?: any
  ) {
    this.addConfirm(
      msg,
      "warning",
      MessageAlertService.CONFIRM_TYPE_YES_NO,
      confirm_yes,
      confirm_no
    );
  }
}
