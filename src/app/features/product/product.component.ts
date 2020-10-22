import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        console.log('ProductComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('ProductComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('ProductComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('ProductComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('ProductComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('ProductComponent - ngOnDestroy');
    }
}
