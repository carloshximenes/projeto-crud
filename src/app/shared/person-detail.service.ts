import { Injectable } from '@angular/core';
import { PersonDetail, ContactDetail } from './person-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonDetailService {
  formDataContact: ContactDetail[] = [];
  deletedContacts: ContactDetail[] = [];
  formData: PersonDetail
  list: PersonDetail[]
  readonly rootURL = 'http://localhost:53162/api';

  constructor(private http: HttpClient) { }

  filterList(name: string, cpf: string) {
    const filteredList = this.list.filter(item => item.PersonName.includes(name) && item.PersonCpf.includes(cpf));
    this.list = [...filteredList];
  }

  addContactList(contactList: ContactDetail) {
    this.formDataContact.push(contactList);
  }

  remContactList(index: number) {
    const deletedContact = this.formDataContact[index];
    if (deletedContact.ContactId > 0) this.deletedContacts.push(deletedContact);
    this.formDataContact.splice(index, 1);
  }

  clsContactList() {
    this.formDataContact = [];
    this.deletedContacts = [];
  }

  postContactList(personId: number) {
    const finalContactList = this.formDataContact.filter(contact => contact.ContactId === 0);
    finalContactList.map(contact => contact.ContactPersonId = personId);
    finalContactList.map(contact => { return this.http.post(this.rootURL + '/ContactLists/', contact).subscribe() });
    this.deletedContacts.map(contact => { return this.http.delete(this.rootURL + '/ContactLists/' + contact.ContactId).subscribe() });
  }

  postPersonDetail(formData: PersonDetail) {
    formData.PersonContacts = this.formDataContact.length;
    if (formData.PersonId > 0)
      return this.http.put(this.rootURL + '/PersonDetails/' + formData.PersonId, formData);
    else
      return this.http.post(this.rootURL + '/PersonDetails', formData);
  }

  refreshPersonList(name?: string, cpf?: string) {
    this.http.get(this.rootURL + '/PersonDetails')
      .toPromise()
      .then(res => {
        this.list = res as PersonDetail[];
        console.log(name, cpf);
        if (name !== undefined && cpf !== null) {
          const filteredList = this.list.filter(item => item.PersonName.includes(name) && item.PersonCpf.includes(cpf));
          this.list = [...filteredList];
        }
      }
      );
  }

  getPersonDetail(personId: Number) {
    this.http.get(this.rootURL + '/PersonDetails/' + personId)
      .toPromise()
      .then(res => this.formData = res as PersonDetail);
    this.http.get(this.rootURL + '/ContactLists/' + personId)
      .toPromise()
      .then(res => this.formDataContact = res as ContactDetail[]);
  }

  deletePersonDetail(personId: Number) {
    return this.http.delete(this.rootURL + '/PersonDetails/' + personId);
  }
}