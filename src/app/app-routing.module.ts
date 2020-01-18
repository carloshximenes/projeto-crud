import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonDetailComponent } from './persons/person-detail/person-detail.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: PersonListComponent },
  { path: 'person', component: PersonDetailComponent },
  { path: 'person/:id', component: PersonDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PersonDetailComponent, PersonListComponent, PageNotFoundComponent];
