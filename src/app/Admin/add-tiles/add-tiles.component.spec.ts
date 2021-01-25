import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTilesComponent } from './add-tiles.component';

describe('AddTilesComponent', () => {
  let component: AddTilesComponent;
  let fixture: ComponentFixture<AddTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
