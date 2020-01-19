export class PersonDetail {
    PersonId: number;
    PersonName: String;
    PersonCpf: String;
    PersonBirthdate: Date;
    PersonEmail: String;
    PersonContacts: number;
}

export class ContactDetail {
    ContactId: number;
    ContactDdd: String;
    ContactNumber: String;
    ContactPersonId: number;
}
