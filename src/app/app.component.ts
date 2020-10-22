import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    constructor() { }

    ngOnInit(): void {
        console.log('AppComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('AppComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('AppComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('AppComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('AppComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('AppComponent - ngOnDestroy');
    }
}
