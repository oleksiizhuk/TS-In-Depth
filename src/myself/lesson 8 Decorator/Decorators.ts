function uiElement(element: string) {
    return function (value: any, context: any) {
        console.log(`Creating new Element of: ${element} class`);
    };
}

@uiElement(ContactForm.name)
class ContactForm {

}
