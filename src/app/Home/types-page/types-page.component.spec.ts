import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesPageComponent } from './types-page.component';

describe('TypesPageComponent', () => {
  let component: TypesPageComponent;
  let fixture: ComponentFixture<TypesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
