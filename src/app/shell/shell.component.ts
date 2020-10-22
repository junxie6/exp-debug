import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        console.log('ShellComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('ShellComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('ShellComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('ShellComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('ShellComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('ShellComponent - ngOnDestroy');
    }
}
