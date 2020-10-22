import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        console.log('HomeComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('HomeComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('HomeComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('HomeComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('HomeComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('HomeComponent - ngOnDestroy');
    }
}
