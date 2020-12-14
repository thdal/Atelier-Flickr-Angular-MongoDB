import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherImagesComponent } from './afficher-images.component';

describe('AfficherImagesComponent', () => {
  let component: AfficherImagesComponent;
  let fixture: ComponentFixture<AfficherImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
