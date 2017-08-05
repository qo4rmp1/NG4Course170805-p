import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  { path: '', component: Page1Component},
  { path: 'Page1', component: Page1Component},
  { path: 'Page2', component: Page2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true, useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
