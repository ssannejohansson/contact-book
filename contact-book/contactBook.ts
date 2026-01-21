interface Contact {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
}

let contacts: Contact[] = [
];

// TODO: Write your functions here
function addContact(contact: Contact) {
    contacts.push(contact);
    console.log(`The contact ${contact.name} has been added to the Contact Book.`);
}

function listContacts() {
    console.log("Contact Book:", contacts);
} 

function findByName(name: string): Contact[] {
    const matches = contacts.filter(contact => contact.name.includes(name));
    console.log(`Found ${matches.length} contacts matching "${name}"`);
    return matches;
}

function removeByID(id: number): boolean {
    const index = contacts.findIndex(contact => contact.id === id);

    if (index === -1) {
        console.log(`No contact with the ID ${id} was found`)
        return false;
    }

    const removedContact = contacts.splice(index, 1)[0]!; 
    console.log(`The contact ${removedContact.name} with the ID ${id} was removed from the Contact Book`);

    return true; 
}

addContact({id: 1, name: "Sanne", email: "sannej0hansson@hotmail.com", phone: "0721602306"});
addContact({id: 2, name: "Linnea", email: "linneasmail@mail.com", phone: "123456789"});
addContact({id: 3, name: "Annica", email: "annicasmail@mail.com", phone: "145432142"});
listContacts();
findByName("Annica");
removeByID(2);
listContacts();