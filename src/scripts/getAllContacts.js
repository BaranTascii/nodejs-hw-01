import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const contacts = await readContacts();
    console.table(contacts);
};

console.log(await getAllContacts());
