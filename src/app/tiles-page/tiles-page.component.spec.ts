import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesPageComponent } from './tiles-page.component';

describe('TilesPageComponent', () => {
  let component: TilesPageComponent;
  let fixture: ComponentFixture<TilesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
