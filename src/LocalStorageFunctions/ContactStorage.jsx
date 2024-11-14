export const saveContactsToLocalStorage = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export const getContactsFromLocalStorage = () => {
  const contacts = localStorage.getItem('contacts');
  return contacts ? JSON.parse(contacts) : [];
};