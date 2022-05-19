import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoTableComponent } from './movimentacao-table.component';

describe('MovimentacaoTableComponent', () => {
  let component: MovimentacaoTableComponent;
  let fixture: ComponentFixture<MovimentacaoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
