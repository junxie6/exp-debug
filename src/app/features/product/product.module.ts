import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductTopbarComponent } from './product-topbar/product-topbar.component';
import { ProductInventoryComponent } from './product-inventory/product-inventory.component';
import { ProductInventoryGridComponent } from './product-inventory-grid/product-inventory-grid.component';
import { ProductInventoryTopbarComponent } from './product-inventory-topbar/product-inventory-topbar.component';

@NgModule({
    declarations: [ProductComponent, ProductTopbarComponent, ProductInventoryComponent, ProductInventoryGridComponent, ProductInventoryTopbarComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
    ],
})
export class ProductModule { }
