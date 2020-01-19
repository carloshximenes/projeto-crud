import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonDetailService } from 'src/app/shared/person-detail.service';

@Component({
  selector: 'app-person-list-table',
  templateUrl: './person-list-table.component.html',
  styles: []
})
export class PersonListTableComponent implements OnInit {

  constructor(private service: PersonDetailService, private router: Router) {

  }

  ngOnInit() {
  }

  calcAge(birthdate) {
    const birthDate = new Date(birthdate);
    const diff_ms = Date.now() - birthDate.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  editPerson(personId: Number) {
    this.router.navigate(['/person', personId]);
    this.service.clsContactList();
  }

  deletePerson(personId: Number) {
    this.service.deletePersonDetail(personId).subscribe(
      res => {
        this.service.refreshPersonList();
      },
      err => console.log(err)
    )
  }

}
