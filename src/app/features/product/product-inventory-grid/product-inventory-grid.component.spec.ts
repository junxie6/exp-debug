import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInventoryGridComponent } from './product-inventory-grid.component';

describe('ProductInventoryGridComponent', () => {
  let component: ProductInventoryGridComponent;
  let fixture: ComponentFixture<ProductInventoryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInventoryGridComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInventoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
