import { Contact } from "../models/contact.model";

export class ContactService{
    private contacts: Contact [] = [{"nombre":"nombre","organizacion":"UC3M","movil":"666666666", "correo":"prueba@alumnos.uc3m.es"}];
    constructor(){

    }
    addContact(value: Contact){
        this.contacts.push(value);
    }
    getContacts(){
        return this.contacts;
    }
    updateContact(value: Contact){

    }
    removeContact(value: Contact){
        
    }
}