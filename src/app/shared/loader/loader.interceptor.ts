import { Injectable, ViewChild } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LoaderService } from "./loader.service";
import { finalize } from "rxjs/operators";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.onSendRequest.emit();
    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.onEndRequest.emit();
      })
    );
  }
}
