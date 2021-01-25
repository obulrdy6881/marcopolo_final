import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcBlogComponent } from './idc-blog.component';

describe('IdcBlogComponent', () => {
  let component: IdcBlogComponent;
  let fixture: ComponentFixture<IdcBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdcBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdcBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
