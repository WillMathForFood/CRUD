import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArchiveComponent } from './blog-archive.component';

describe('BlogArchiveComponent', () => {
  let component: BlogArchiveComponent;
  let fixture: ComponentFixture<BlogArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
