import { Injectable } from "@angular/core";
import { CrudService } from "./crud.service";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class PedidosService extends CrudService {

  serviceName() {
    return "pedidos";
  }
}
