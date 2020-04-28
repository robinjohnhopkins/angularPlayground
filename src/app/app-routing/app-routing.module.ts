import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowtoComponent } from '../howto/howto.component';
import { ExamplesComponent } from '../examples/examples.component';

const routes: Routes = [
  { path: '', redirectTo: 'howto', pathMatch: 'full'},
  { path: 'howto', component: HowtoComponent, },
  { path: 'examples', component: ExamplesComponent, },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }