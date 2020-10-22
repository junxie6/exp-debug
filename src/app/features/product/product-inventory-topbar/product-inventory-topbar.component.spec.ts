import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInventoryTopbarComponent } from './product-inventory-topbar.component';

describe('ProductInventoryTopbarComponent', () => {
  let component: ProductInventoryTopbarComponent;
  let fixture: ComponentFixture<ProductInventoryTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInventoryTopbarComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInventoryTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
