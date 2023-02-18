import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTabbarComponent } from './icon-tabbar.component';

describe('IconTabbarComponent', () => {
  let component: IconTabbarComponent;
  let fixture: ComponentFixture<IconTabbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTabbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
