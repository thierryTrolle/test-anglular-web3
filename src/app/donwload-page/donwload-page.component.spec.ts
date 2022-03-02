import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonwloadPageComponent } from './donwload-page.component';

describe('DonwloadPageComponent', () => {
  let component: DonwloadPageComponent;
  let fixture: ComponentFixture<DonwloadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonwloadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonwloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
