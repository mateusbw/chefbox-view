import { Injectable } from "@angular/core";
import { CrudService } from "./crud.service";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class RefeicoesService extends CrudService {

  serviceName() {
    return "refeicoes";
  }
}
