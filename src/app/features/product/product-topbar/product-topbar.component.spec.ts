import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopbarComponent } from './product-topbar.component';

describe('ProductTopbarComponent', () => {
  let component: ProductTopbarComponent;
  let fixture: ComponentFixture<ProductTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTopbarComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
