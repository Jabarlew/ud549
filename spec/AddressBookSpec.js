describe('Address Book', function() {
    it('should be able to add a contact', () => {
        let addressBook = new AddressBook(),
            thisContact = new Contact();

        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });
});