import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { MovielistComponent } from './components/movielist/movielist.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { UpdatemovieComponent } from './components/updatemovie/updatemovie.component';
import { ViewmovieComponent } from './components/viewmovie/viewmovie.component';

const routes: Routes = [
  {
    path: 'movielist',
    component: MovielistComponent
  },
  {
    path: 'movielist/:movieID',
    component: ViewmovieComponent
  },
  {
    path: 'updatemovie/:movieID',
    component: UpdatemovieComponent
  },
  {
    path: 'addmovie',
    component: AddmovieComponent
  },
  {
    path: '', redirectTo:'movielist', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }