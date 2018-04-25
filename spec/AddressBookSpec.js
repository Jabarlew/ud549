describe('Address Book', function () {
    it('should be able to add a contact', () => {
        let addressBook = new AddressBook();
        let thisContact = new Contact();

        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete contact', function () {
        const addressBook = new AddressBook();
        const thisContact = new Contact();

        addressBook.addContact(thisContact);
        addressBook.deleteContact();

        expect(addressBook.getContact(0)).not.toBeDefined();
    })
});

describe('Async Address Book', function() {
    it('should grab initial contacts', function() {
        let addressBook = new AddressBook();

        addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(true);
    });
});