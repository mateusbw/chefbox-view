import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export abstract class CrudService {
  abstract serviceName();
  protected apiUrl = environment.baseUrl;

  constructor(protected http: HttpClient) {}

  public index(filter?: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.serviceName()}`, {
      params: filter,
    });
  }

  public create(data): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.serviceName()}`, data);
  }

  public find(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.serviceName()}/${id}`);
  }

  public update(data, id?: number): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/${this.serviceName()}/${id ? id : ""}`,
      data
    );
  }
  public destroy(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${this.serviceName()}/${id}`);
  }
}
