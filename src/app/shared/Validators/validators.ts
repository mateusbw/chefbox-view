import { AbstractControl } from "@angular/forms";

export const ValidateEqualPassword = (control: AbstractControl) => {
  let currentPassword =
    control.parent !== undefined ? control.parent.get("senha").value : "";
  if (control.value !== currentPassword) {
    return { equalPassword: true };
  }
  return null;
};

export const ValidateCpf = (control: AbstractControl) => {
  if (control.value == "") return { invalidCPF: true };

  if (control.value == null) return { invalidCPF: true };

  // Elimina control.values invalidos conhecidos
  if (
    control.value.length != 11 ||
    control.value == "00000000000" ||
    control.value == "11111111111" ||
    control.value == "22222222222" ||
    control.value == "33333333333" ||
    control.value == "44444444444" ||
    control.value == "55555555555" ||
    control.value == "66666666666" ||
    control.value == "77777777777" ||
    control.value == "88888888888" ||
    control.value == "99999999999"
  )
    return { invalidCPF: true };

  // Valida 1o digito
  let add = 0;

  for (let i = 0; i < 9; i++)
    add += parseInt(control.value.charAt(i)) * (10 - i);

  let rev = 11 - (add % 11);

  if (rev == 10 || rev == 11) rev = 0;

  if (rev != parseInt(control.value.charAt(9))) return { invalidCPF: true };

  // Valida 2o digito
  add = 0;

  for (let i = 0; i < 10; i++)
    add += parseInt(control.value.charAt(i)) * (11 - i);

  rev = 11 - (add % 11);

  if (rev == 10 || rev == 11) rev = 0;

  if (rev != parseInt(control.value.charAt(10))) return { invalidCPF: true };

  return null;
};
