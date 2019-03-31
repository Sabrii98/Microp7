import { Contact } from "../models/contact.model";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class ContactService{
    //private contacts: Contact [] = [{"nombre":"nombre","organizacion":"UC3M","movil":"666666666", "correo":"prueba@alumnos.uc3m.es"}];
    
    private contactsRef = this.db.list<Contact>('AgendaFirebase'); 
    constructor(private db:AngularFireDatabase){

    }
    addContact(value: Contact){
        //this.contacts.push(value);
        return this.contactsRef.push(value);
    }
    getContacts(){
        //return this.contacts;
        return this.contactsRef;
    }
    updateContact(value: Contact){
        return this.contactsRef.update(value.key, value);

    }
    removeContact(value: Contact){
        return this.contactsRef.remove(value.key);
    }
}