import { Injectable } from '@angular/core';
import { PersonDetail } from './person-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailService {

  formData: PersonDetail

  constructor() { }
}