import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTilesComponent } from './view-tiles.component';

describe('ViewTilesComponent', () => {
  let component: ViewTilesComponent;
  let fixture: ComponentFixture<ViewTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
