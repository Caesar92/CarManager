import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCarComponent } from './read-car.component';

describe('ReadCarComponent', () => {
  let component: ReadCarComponent;
  let fixture: ComponentFixture<ReadCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
