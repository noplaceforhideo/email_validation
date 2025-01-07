function validateEmail(email) {
    // Regular expression to validate email addresses
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Example usage
const email = "example@example.com";
if (validateEmail(email)) {
    console.log("The email address is valid.");
} else {
    console.log("The email address is not valid.");
}
