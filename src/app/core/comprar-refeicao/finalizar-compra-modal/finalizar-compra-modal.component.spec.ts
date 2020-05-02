import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarCompraModalComponent } from './finalizar-compra-modal.component';

describe('FinalizarCompraModalComponent', () => {
  let component: FinalizarCompraModalComponent;
  let fixture: ComponentFixture<FinalizarCompraModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarCompraModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarCompraModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
