class AddressBook {
    constructor() {
        this.contacts = [];
    }

    getContact(num) {
        return this.contacts[num];
    }
    addContact(contact) {
       this.contacts.push(contact);
    }
}

let addressBook = new AddressBook();