import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class LoaderService {
  public onSendRequest: EventEmitter<void>;
  public onEndRequest: EventEmitter<void>;

  constructor() {
    this.onSendRequest = new EventEmitter<void>();
    this.onEndRequest = new EventEmitter<void>();
  }
}
