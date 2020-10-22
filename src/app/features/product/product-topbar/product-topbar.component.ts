import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-product-topbar',
    templateUrl: './product-topbar.component.html',
    styleUrls: ['./product-topbar.component.scss'],
})
export class ProductTopbarComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    public demo = '';

    constructor() { }

    ngOnInit(): void {
        console.log('ProductTopbarComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('ProductTopbarComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('ProductTopbarComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('ProductTopbarComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('ProductTopbarComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('ProductTopbarComponent - ngOnDestroy');
    }

    onDebugBtnClicked(): void {
        setTimeout(() => {
            this.demo = 'ok';
        }, 0);
    }
}
