import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigliettiComponent } from './biglietti.component';

describe('BigliettiComponent', () => {
  let component: BigliettiComponent;
  let fixture: ComponentFixture<BigliettiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigliettiComponent]
    });
    fixture = TestBed.createComponent(BigliettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
