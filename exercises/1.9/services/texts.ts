import { v4 as uuidv4 } from 'uuid';

const texts = [
    { id: uuidv4(), content: "Welcome to our service! We are delighted to have you here. Our platform offers a wide range of features designed to make your experience seamless and enjoyable. Whether you are here to explore our services, get support, or simply learn more about what we offer, we are here to assist you every step of the way. Feel free to navigate through our various sections and discover all that we have in store for you.", level: "easy" },
    { id: uuidv4(), content: "Thank you for visiting! We hope you found what you were looking for. Your satisfaction is our priority, and we are constantly working to improve our services. If you have any feedback or suggestions, please do not hesitate to reach out to us. We value your input and look forward to serving you again in the future.", level: "easy" },
    { id: uuidv4(), content: "An error has occurred. Please try again. We apologize for any inconvenience this may have caused. Our team is working diligently to resolve the issue. In the meantime, you can try refreshing the page or coming back later. If the problem persists, please contact our support team for further assistance. Thank you for your patience and understanding.", level: "medium" },
    { id: uuidv4(), content: "Loading, please wait... We are processing your request and will have the information you need shortly. Your patience is greatly appreciated. If this takes longer than expected, please check your internet connection or try reloading the page. We strive to provide you with the best possible experience and thank you for your understanding.", level: "easy" },
    { id: uuidv4(), content: "Operation completed successfully! Your request has been processed, and everything is in order. You can now proceed with the next steps or continue exploring our services. If you have any questions or need further assistance, please do not hesitate to reach out to our support team. We are here to help you.", level: "medium" },
    { id: uuidv4(), content: "Please check your input. It seems there might be an error in the information you provided. Ensure that all required fields are filled out correctly and try again. If you continue to experience issues, please consult our help section or contact support for further guidance. We are here to assist you in any way we can.", level: "hard" },
    { id: uuidv4(), content: "For more information, visit our website. We have a wealth of resources available to help you understand our services better. From detailed guides and FAQs to customer testimonials and case studies, you will find everything you need to make informed decisions. If you have any specific questions, our support team is just a click away.", level: "medium" }
];

function readAll(level: string | undefined = undefined) {
    if (level) {
        return texts.filter((text) => text.level === level);
    }
    return texts;
}

function readOne(id: string) {
    return texts.find((text) => text.id === id);
}

function createOne(newText: { content: string, level: string }) {
    const text = { id: uuidv4(), ...newText };
    texts.push(text);
    return text;
}

function deleteOne(id: string) {
    const index = texts.findIndex((text) => text.id === id);
    if (index === -1) {
        return undefined;
    }

    const deletedText = texts[index];
    texts.splice(index, 1);
    return deletedText;
}

function updateOne(id: string, updatedText: { content: string, level: string }) {
    const index = texts.findIndex((text) => text.id === id);
    if (index === -1) {
        return undefined;
    }

    texts[index] = { id, ...updatedText };
    return texts[index];
}

export { readAll, readOne, createOne, deleteOne, updateOne };