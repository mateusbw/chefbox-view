import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRefeicaoComponent } from './item-refeicao.component';

describe('ItemRefeicaoComponent', () => {
  let component: ItemRefeicaoComponent;
  let fixture: ComponentFixture<ItemRefeicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRefeicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
