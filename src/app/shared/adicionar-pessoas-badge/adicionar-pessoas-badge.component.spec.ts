import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPessoasBadgeComponent } from './adicionar-pessoas-badge.component';

describe('AdicionarPessoasBadgeComponent', () => {
  let component: AdicionarPessoasBadgeComponent;
  let fixture: ComponentFixture<AdicionarPessoasBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarPessoasBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarPessoasBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
