import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrcamentoDetalhesPage } from './orcamento-detalhes.page';

describe('OrcamentoDetalhesPage', () => {
  let component: OrcamentoDetalhesPage;
  let fixture: ComponentFixture<OrcamentoDetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
