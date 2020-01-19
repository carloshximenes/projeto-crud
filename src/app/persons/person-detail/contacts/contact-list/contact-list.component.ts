import { Component, OnInit, Input } from '@angular/core';
import { PersonDetailService } from 'src/app/shared/person-detail.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: []
})
export class ContactListComponent implements OnInit {

  constructor(private service: PersonDetailService) { }

  ngOnInit() {
  }

  deleteContact(e: Event, index: number) {
    e.stopPropagation();
    e.preventDefault();
    this.service.remContactList(index);
  }
}
