import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styles: []
})
export class PersonDetailComponent implements OnInit {

  personData = {}

  personList = [{
    PersonId: 1,
    PersonName: 'Carlos Henrique',
    PersonEmail: 'carloshximenes@gmail.com',
    PersonCpf: '04903483355',
    PersonBirthdate: '1991-04-21',
    PersonContactListId: [1, 2, 3, 4, 5]
  },
  {
    PersonId: 2,
    PersonName: 'Gessyca Lacerda',
    PersonEmail: 'gessyca.lm@gmail.com',
    PersonCpf: '04824443393',
    PersonBirthdate: '1991-11-01',
    PersonContactListId: [6, 7]
  }]

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.personData = this.personList.find(person => person.PersonId === id);
  }

  returnList() {
    this.router.navigate(['list']);  
  }

}
