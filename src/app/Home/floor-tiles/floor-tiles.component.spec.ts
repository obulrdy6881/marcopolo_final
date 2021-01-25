import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorTilesComponent } from './floor-tiles.component';

describe('FloorTilesComponent', () => {
  let component: FloorTilesComponent;
  let fixture: ComponentFixture<FloorTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
