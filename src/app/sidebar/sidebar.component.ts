import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        console.log('SidebarComponent - ngOnInit');
    }

    ngAfterContentInit(): void {
        console.log('SidebarComponent - ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('SidebarComponent - ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('SidebarComponent - ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('SidebarComponent - ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('SidebarComponent - ngOnDestroy');
    }
}
