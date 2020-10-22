import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        console.log('HeaderComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('HeaderComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('HeaderComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('HeaderComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('HeaderComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('HeaderComponent - ngOnDestroy');
    }
}
