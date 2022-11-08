import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChildComponent } from './components/list-child/list-child.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [  {
  path: '',
  component: ListComponent,
},

{
  path: 'list-business/:id',
  component: ListChildComponent,
  
},
{
  path: 'list-result/:id',
  component: ListChildComponent,
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
