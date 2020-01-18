import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list-table',
  templateUrl: './person-list-table.component.html',
  styles: []
})
export class PersonListTableComponent implements OnInit {

  list = [{
    PersonId: 1,
    PersonName: 'Carlos Henrique',
    PersonEmail: 'carloshximenes@gmail.com',
    PersonCpf: '04903483355',
    PersonBirthdate: '19910421',
    PersonContactListId: [1, 2, 3, 4, 5]
  }];

  public calcAge(value) {
    const birthObj = {
      year: value.substr(0, 4),
      month: value.substr(4, 2),
      day: value.substr(-2)
    };
    const { year, month, day } = birthObj;
    const birth = new Date(year, month, day);
    const curr = new Date();
    const diff = curr.getTime() - birth.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editPerson(person) {
    this.router.navigate(['/person', person.PersonId]);    
  }

}
