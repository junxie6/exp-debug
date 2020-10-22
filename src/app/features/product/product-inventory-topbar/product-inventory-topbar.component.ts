import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-product-inventory-topbar',
    templateUrl: './product-inventory-topbar.component.html',
    styleUrls: ['./product-inventory-topbar.component.scss'],
})
export class ProductInventoryTopbarComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        console.log('ProductInventoryTopbarComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('ProductInventoryTopbarComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('ProductInventoryTopbarComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('ProductInventoryTopbarComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('ProductInventoryTopbarComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('ProductInventoryTopbarComponent - ngOnDestroy');
    }
}
