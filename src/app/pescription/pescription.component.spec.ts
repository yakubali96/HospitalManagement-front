import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PescriptionComponent } from './pescription.component';

describe('PescriptionComponent', () => {
  let component: PescriptionComponent;
  let fixture: ComponentFixture<PescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
