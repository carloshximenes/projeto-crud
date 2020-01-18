import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: []
})
export class ContactListComponent implements OnInit {

  contactDatabase = [{
    ContactId: 1,
    ContactDdd: 85,
    ContactNumber: 988324741
  },
  {
    ContactId: 2,
    ContactDdd: 85,
    ContactNumber: 32493198
  },
  {
    ContactId: 3,
    ContactDdd: 85,
    ContactNumber: 40060001
  },
  {
    ContactId: 4,
    ContactDdd: 85,
    ContactNumber: 40065543
  },
  {
    ContactId: 5,
    ContactDdd: 88,
    ContactNumber: 12365478
  },
  {
    ContactId: 7,
    ContactDdd: 85,
    ContactNumber: 998068303
  },
  {
    ContactId: 7,
    ContactDdd: 81,
    ContactNumber: 32451580
  }]

  public MyContacts;

  @Input()
    contactList: Array<any>;

  constructor() { }

  ngOnInit() {
    this.MyContacts = this.contactList.map(id => this.contactDatabase.find(contactId => contactId.ContactId === id));
    console.log(this.MyContacts);
  }

}
