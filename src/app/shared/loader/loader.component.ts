import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LoaderService } from "./loader.service";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  show = false;
  constructor(
    private loaderSevice: LoaderService
  ) {
    this.loaderSevice.onSendRequest.subscribe(() => {
      this.show = true;
    });

    this.loaderSevice.onEndRequest.subscribe(() => {
      this.show = false;
    });
  }

  ngOnInit() {}
}
