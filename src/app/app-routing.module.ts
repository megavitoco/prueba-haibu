import { TablaComponent } from './tabla/tabla.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'tabla',
    pathMatch: 'full'
  },
  {path: 'tabla', component: TablaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
