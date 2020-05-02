import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type = "text";
  @Input() mask: string;
  @Input() form: FormGroup;
  @Input() inputName: string;
  @Input() icon: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  constructor() { }

  get input(): AbstractControl {
    return this.form.get(this.inputName);
  }

  ngOnInit() {
  }

  inputHasValue() {
    return this.input.value != "";
  }

  get validationKeys() {
    if (this.input.errors != null) {
      return Object.keys(this.input.errors);
    } else {
      return [];
    }
  }

  isNotValid() {
    return !this.input.valid && this.input.touched;
  }
  isValid() {
    return this.input.valid && this.input.touched;
  }

}
