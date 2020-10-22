import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductInventoryComponent } from './product-inventory/product-inventory.component';

import { ProductComponent } from './product.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        children: [
            {
                path: 'inventory',
                component: ProductInventoryComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }
