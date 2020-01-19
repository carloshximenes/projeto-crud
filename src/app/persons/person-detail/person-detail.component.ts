import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PersonDetailService } from 'src/app/shared/person-detail.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styles: []
})
export class PersonDetailComponent implements OnInit {

  selectedId = null;

  constructor(private service: PersonDetailService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.service.clsContactList();
    const newId = parseInt(this.route.snapshot.paramMap.get('id'));
    if (newId > 0)
      this.service.getPersonDetail(newId);
    this.selectedId = newId;
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      PersonId: 0,
      PersonName: '',
      PersonCpf: '',
      PersonBirthdate: null,
      PersonEmail: '',
      PersonContacts: 0
    }
  }

  onSubmit(form: NgForm) {
    const personId = form.value.PersonId;
    let retorno = null;
    this.service.postPersonDetail(form.value).subscribe(
      res => retorno = res,
      err => console.log(err),
      () => { 
        retorno != null ? this.service.postContactList(retorno.PersonId) : this.service.postContactList(personId)
        this.resetForm(form);
        this.returnList();
      }
    )
  }

  returnList() {
    this.service.refreshPersonList();
    this.router.navigate(['list']);
  }
}
