import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  @Input()
    contactList: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
