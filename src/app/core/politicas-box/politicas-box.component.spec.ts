import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasBoxComponent } from './politicas-box.component';

describe('PoliticasBoxComponent', () => {
  let component: PoliticasBoxComponent;
  let fixture: ComponentFixture<PoliticasBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
