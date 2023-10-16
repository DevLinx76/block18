// /*
//  Block18 Workshop: Writing Test Specifica

//  Overview:
//  One of the first steps for many TDD projects is determining which tests need to 
//  be written for a project, feature, or piece of code. These range from unit tests 
//  (at a very low level, what result we should expect from calling a specific 
//  function or piece of code), to functional tests (what does our website or app 
//  need to do when a user performs some action).
//  In this workshop, you are going to write instructions for tests, often known as 
//  test specifications, or test specs, for a series of prompts.

//  Unit test specifications should take the form of:
//  * Expect [action] to be [some result]
//  * Example: For the prompt "A function called "addition" that returns the sum of 
//  two input integers", your tests might include:
//      * Expect addition(2, 3) to be a number
//      * Expect addition(2, 3) to be equal to 5
//      * Expect addition("a", 3) to be an error


//  ——————————————————————————————————————————————————


//  Functional test specifications can be worded slightly more naturally:
//  * When a user [does something with some parameters], [some thing should happen]
//  * Example: For the prompt was "A login and signup page that allows Single Sign-On with Google", your tests might include:
//      * When a user clicks "Log In" without filling in any information, they should be shown an error and prompted to sign up if they have not yet.
//      * When a user clicks "Log In" but has filled out an incorrect login or password, they should be shown an error and prompted to sign up if they have not yet.
//      * When a user clicks "Log In" and has filled in their login and password correctly, they should be taken to their dashboard.
//      * When a user clicks "Create Account" without filling in any information, they should be shown an error.
//      * When a user clicks "Create Account" with an invalid email address or password, they should be shown an error.
//      * When a user clicks the "Sign Up with Google" button, they should be taken through the Google authentication process.
//      * When a user clicks "Log In with Google", they should be logged in through Google, or taken through the Google authentication process if they do not already have an account.
//  Prompts: 
//  For each prompt below: 
//  * Read the prompt.
//  * Identify the expectations.
//  * Write specifications for all the tests that would be useful for that prompt.
//      * Try to take any "edge cases," or unexpected circumstances, into account, and write test specs for them.
//      * Try not to write extraneous tests!

//  =====================================================================================================================================


//  Write Functional Tests for:
//          1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
//              * Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
//                  * What should happen if the cart is empty?
//                  * What needs to be shown to the user at each step of check out?
//                  * What behaviors of this feature does the prompt miss or gloss over?
//              * Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!


//  Note: Please create a file in your vscode and write the tests as comments in 
//  there. You can push that file to github then and share it the usual way with us. Also note, this workshop does not involve coding it's a theoretical testing exercise. Your file may look like : 


//  /*

//  Unit Tests 

//  Prompt 1 - A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

//  Prompt 1 Tests - 

//  1. concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) => [-1, 1, 3, 9, 15]

//  2.concatOdds([...

//  Prompt 2 - ......

//  1. ...

//  2. ...

//  Functional Tests

//  ...

//  */
//  =============================================================================


/*

Functional Tests:

Prompt 1 - A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

Functional Test Specifications:
1. When a user with items in the cart chooses to check out as a guest, they should be prompted to provide their shipping information.
2. When a user with items in the cart chooses to check out as a guest and provides their shipping information, they should be prompted to provide their payment details.
3. When a user with items in the cart chooses to check out as a guest, provides their shipping information, and provides their payment details, their order should be processed and they should receive an order confirmation.
4. When a user with items in the cart chooses to log in and check out, they should be prompted to enter their login credentials.
5. When a user with items in the cart chooses to log in and check out, enters their login credentials, and their credentials are valid, their order should be processed and they should receive an order confirmation.
6. When a user with items in the cart chooses to log in and check out, enters their login credentials, and their credentials are invalid, they should be shown an error message.
7. When a user with an empty cart chooses to check out as a guest, they should be prompted to add items to their cart before checking out.
8. When a user with an empty cart chooses to log in and check out, they should be prompted to add items to their cart before checking out.



Prompt 2 - An email subscription feature that allows users to subscribe to a newsletter by providing their email address. Once subscribed, they should receive a confirmation email.

Functional Test Specifications:
1. When a user enters a valid email address and clicks the "Subscribe" button, they should receive a success message indicating that they have been subscribed.
2. When a user enters an invalid email address (missing "@" symbol) and clicks the "Subscribe" button, they should be shown an error message indicating that the email address is invalid.
3. When a user enters an already subscribed email address and clicks the "Subscribe" button, they should be shown a message indicating that they are already subscribed and no further action is needed.
4. When a user clicks the "Unsubscribe" button after being subscribed, they should receive a confirmation message indicating that they have been unsubscribed.
5. When a user clicks the "Unsubscribe" button without being subscribed, they should be shown a message indicating that they are not currently subscribed and no further action is needed.
6. When a user subscribes and receives a confirmation email, the email should contain the necessary details and instructions for managing their subscription.
7. When a user subscribes and does not receive a confirmation email within a reasonable time frame, they should be provided with an option to resend the confirmation email.
8. When a user enters their email address in an incorrect format (e.g., with extra spaces or special characters) and clicks the "Subscribe" button, they should be shown an error message indicating that the email address format is incorrect.

*/