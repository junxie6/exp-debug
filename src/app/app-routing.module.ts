import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            // Redirect to /home. Notice that this redirect precedes the
            // wildcard route. Here, path: '' means to use the initial relative
            // URL ('').
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'product',
                loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule),
            },
            {
                path: 'order',
                loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule),
            },
        ],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                useHash: true,
                onSameUrlNavigation: 'reload',
                //enableTracing: !environment.production,
            },
        ),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
