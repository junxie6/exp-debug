import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-product-inventory',
    templateUrl: './product-inventory.component.html',
    styleUrls: ['./product-inventory.component.scss'],
})
export class ProductInventoryComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        console.log('ProductInventoryComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('ProductInventoryComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('ProductInventoryComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('ProductInventoryComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('ProductInventoryComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('ProductInventoryComponent - ngOnDestroy');
    }
}
