export default function createForm() {

const contactForm = document.createElement('form');
contactForm.setAttribute("method", "post");
contactForm.setAttribute("action", "");

const contactName = document.createElement('input');
contactName.setAttribute("type", "text");
contactName.setAttribute("name", "contact-name");
contactName.setAttribute("placeholder", "Your Name");
contactName.setAttribute("id", "contact-name");


const contactEmail = document.createElement('input');
contactEmail.setAttribute("type", "email");
contactEmail.setAttribute("name", "contact-email");
contactEmail.setAttribute("placeholder", "youremail@address.com");
contactEmail.setAttribute("id", "contact-email");

const contactNumber = document.createElement('input');
contactNumber.setAttribute("type", "number");
contactNumber.setAttribute("name", "contact-number");
contactNumber.setAttribute("placeholder", "555-555-5555");
contactNumber.setAttribute("id", "contact-number");

const contactMessage = document.createElement('textarea');
contactMessage.setAttribute("name", "contact-message");
contactMessage.setAttribute("id", "contact-message");

const submitBtn = document.createElement('input');
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "Submit");

const homeContainer = document.getElementById('content');
homeContainer.appendChild(contactForm);
contactForm.appendChild(contactName);
contactForm.appendChild(contactEmail);
contactForm.appendChild(contactNumber);
contactForm.appendChild(contactMessage);
contactForm.appendChild(submitBtn);

};