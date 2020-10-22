import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-product-inventory-grid',
    templateUrl: './product-inventory-grid.component.html',
    styleUrls: ['./product-inventory-grid.component.scss'],
})
export class ProductInventoryGridComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        console.log('ProductInventoryGridComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('ProductInventoryGridComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('ProductInventoryGridComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('ProductInventoryGridComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('ProductInventoryGridComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('ProductInventoryGridComponent - ngOnDestroy');
    }
}
