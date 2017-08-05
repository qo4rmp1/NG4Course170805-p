import { NgModule } from '@angular/core';
import {Route, Routes,  RouterModule} from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AppComponent } from './app.component';
import { fallbackRoute } from './shared/fallback-rout';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'Page1', component: Page1Component},
  { path: 'Page2', component: Page2Component},
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true, useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
