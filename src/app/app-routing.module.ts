import { NgModule } from '@angular/core';
import { 
  Routes,
  RouterModule 
} from '@angular/router';
import { ApartmentsComponent } from './apartments/apartments.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { DetailComponent } from './apartments/apartments-list/detail/detail.component';

const routes: Routes = [
  { path: '', component: ApartmentsComponent, pathMatch: 'full'},
  { path: 'bookmarks', component: BookmarkListComponent},
  { path: ':id/detail', component: DetailComponent},
  { path: ':mark/:id/detail', component : DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
