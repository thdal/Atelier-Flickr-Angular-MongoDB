import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteurRechercheComponent } from './moteur-recherche.component';

describe('MoteurRechercheComponent', () => {
  let component: MoteurRechercheComponent;
  let fixture: ComponentFixture<MoteurRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoteurRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoteurRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
