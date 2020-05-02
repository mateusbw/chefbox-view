import { Injectable } from "@angular/core";
import { CrudService } from "./crud.service";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class ClienteService extends CrudService {

  serviceName() {
    return "clientes";
  }
}
