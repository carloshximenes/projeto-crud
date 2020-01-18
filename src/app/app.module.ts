import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailComponent } from './persons/person-detail/person-detail.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonListMenuComponent } from './persons/person-list/person-list-menu/person-list-menu.component';
import { PersonListTableComponent } from './persons/person-list/person-list-table/person-list-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonDetailService } from './shared/person-detail.service';
import { ContactsComponent } from './persons/person-detail/contacts/contacts.component';
import { ContactMenuComponent } from './persons/person-detail/contacts/contact-menu/contact-menu.component';
import { ContactListComponent } from './persons/person-detail/contacts/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonDetailComponent,
    PersonListComponent,
    PersonListMenuComponent,
    PersonListTableComponent,
    PageNotFoundComponent,
    ContactsComponent,
    ContactMenuComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
