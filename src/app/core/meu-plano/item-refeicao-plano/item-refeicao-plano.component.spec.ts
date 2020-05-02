import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRefeicaoPlanoComponent } from './item-refeicao-plano.component';

describe('ItemRefeicaoPlanoComponent', () => {
  let component: ItemRefeicaoPlanoComponent;
  let fixture: ComponentFixture<ItemRefeicaoPlanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRefeicaoPlanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRefeicaoPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
