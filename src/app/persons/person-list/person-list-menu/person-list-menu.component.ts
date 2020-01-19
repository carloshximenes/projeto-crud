import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonDetailService } from 'src/app/shared/person-detail.service';

@Component({
  selector: 'app-person-list-menu',
  templateUrl: './person-list-menu.component.html',
  styles: []
})
export class PersonListMenuComponent implements OnInit {

  searchName = '';
  searchCpf = '';

  constructor(private router: Router, private service: PersonDetailService) { }

  ngOnInit() {
  }

  resetSearchInputs() {
    this.searchName = '';
    this.searchCpf = '';
  }

  searchPerson() {
    //this.service.filterList(this.searchName, this.searchCpf);
    this.service.refreshPersonList(this.searchName, this.searchCpf);
  }

  addPerson() {
    this.router.navigate(['/person']);    
  }

}
