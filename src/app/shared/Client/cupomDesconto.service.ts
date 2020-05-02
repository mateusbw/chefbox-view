import { Injectable } from "@angular/core";
import { CrudService } from "./crud.service";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class CupomDescontoService extends CrudService {

  serviceName() {
    return "cupom";
  }
}
