import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailComponent } from './persons/person-detail/person-detail.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonListMenuComponent } from './persons/person-list/person-list-menu/person-list-menu.component';
import { PersonListTableComponent } from './persons/person-list/person-list-table/person-list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonDetailComponent,
    PersonListComponent,
    PersonListMenuComponent,
    PersonListTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
