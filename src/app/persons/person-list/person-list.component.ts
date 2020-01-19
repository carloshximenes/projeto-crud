import { Component, OnInit } from '@angular/core';
import { PersonDetailService } from 'src/app/shared/person-detail.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styles: []
})
export class PersonListComponent implements OnInit {

  constructor(private service: PersonDetailService) { }

  ngOnInit() { 
    this.service.refreshPersonList();
  }

}
