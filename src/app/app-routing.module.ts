import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Practica1Component } from './pages/practica1/practica1.component';
import { Practica2Component } from './pages/practica2/practica2.component';


const routes: Routes = [
  { path: 'practica1', component: Practica1Component },
  { path: 'practica2', component: Practica2Component },
  { path: '**', pathMatch:'full', redirectTo:'practica2' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
