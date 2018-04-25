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
    deleteContact(num, items= 1) {
        this.contacts.splice(num);
    }
}
