import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBannerComponent } from './book-banner.component';

describe('BookBannerComponent', () => {
  let component: BookBannerComponent;
  let fixture: ComponentFixture<BookBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
