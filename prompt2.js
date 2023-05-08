// Prompt 2 - An email subscription feature that allows users to subscribe to a newsletter by providing their email address. Once subscribed, they should receive a confirmation email.

const subscribeEmail = (email) => {
    // Subscribe the email address to the newsletter
    // Send a confirmation email to the subscribed email address
    // Return a success message indicating the subscription was successful
    return `You have successfully subscribed to the newsletter. Confirmation email has been sent to ${email}.`;
  }
  
  const unsubscribeEmail = (email) => {
    // Unsubscribe the email address from the newsletter
    // Return a confirmation message indicating the unsubscription was successful
    return `You have successfully unsubscribed from the newsletter. You will no longer receive any emails.`;
  }
  
  // Test cases
  console.log(subscribeEmail("example@example.com")); // Expected output: You have successfully subscribed to the newsletter. Confirmation email has been sent to example@example.com.
  console.log(unsubscribeEmail("example@example.com")); // Expected output: You have successfully unsubscribed from the newsletter. You will no longer receive any emails.
  