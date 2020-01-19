import { Component, OnInit } from '@angular/core';
import { PersonDetailService } from 'src/app/shared/person-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-menu',
  templateUrl: './contact-menu.component.html',
  styles: []
})
export class ContactMenuComponent implements OnInit {

  newContactNumber = {
    ContactId: 0,
    ContactDdd: '',
    ContactNumber: '',
    ContactPersonId: 0
  }

  constructor(private service: PersonDetailService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  clearContactNumber() {
    this.newContactNumber = {
      ContactId: 0,
      ContactDdd: '',
      ContactNumber: '',
      ContactPersonId: 0
    }
  }

  addContact(e: Event) {
    const newId = parseInt(this.route.snapshot.paramMap.get('id'));
    if (newId > 0)
      this.newContactNumber.ContactPersonId = newId;
    e.stopPropagation();
    e.preventDefault();
    this.service.addContactList(this.newContactNumber);
    this.clearContactNumber();
  }
}
