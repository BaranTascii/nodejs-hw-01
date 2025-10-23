import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (count = 5) => {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: count }, () => createFakeContact());
    const updated = [...contacts, ...newContacts];
    await writeContacts(updated);
    console.log(`${count} yeni kişi eklendi!`);
};

generateContacts(5);
