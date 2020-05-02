import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarRefeicaoComponent } from './comprar-refeicao.component';

describe('ComprarRefeicaoComponent', () => {
  let component: ComprarRefeicaoComponent;
  let fixture: ComponentFixture<ComprarRefeicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprarRefeicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarRefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
