import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list-menu',
  templateUrl: './person-list-menu.component.html',
  styles: []
})
export class PersonListMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addPerson() {
    this.router.navigate(['/person']);    
  }

}
