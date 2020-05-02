import { Pipe, PipeTransform } from "@angular/core";
import { ErrorMessageResource } from "./ErrorMessageRosource";

@Pipe({
  name: "errorMessage"
})
export class ErrorMessagePipe implements PipeTransform {
  private errorMessageResource: ErrorMessageResource;
  constructor() {
    this.errorMessageResource = new ErrorMessageResource();
  }

  transform(key: string, ...args: any[]): any {
    if (key != null) {
      return this.errorMessageResource.getMessage(key);
    }
  }
}
