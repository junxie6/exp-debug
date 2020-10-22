import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        console.log('FooterComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('FooterComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('FooterComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('FooterComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('FooterComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('FooterComponent - ngOnDestroy');
    }
}
