import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-politicas-box",
  templateUrl: "./politicas-box.component.html",
  styleUrls: ["./politicas-box.component.scss"],
})
export class PoliticasBoxComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}
}
