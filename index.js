// // You are building a system that sends email reminders to users 5 seconds after they register.Create an async function 
// // sendReminder(email) that waits 5 seconds using setTimeout and then logs "Reminder sent to [email]".Simulate sending a reminder to 3 users.
// Pseudocode
// 1.input string of emails
// create a function that takes in an array of emails 
// setTimeout for five seconds that returns a message to each email

let email = ["jane@gmail.com","peter@gmail.com", "rayan@gmail.com"]
function reminder(email){
setTimeout(()=>{
    console.log(`Reminder sent to ${email}`);
    
}, 5000);
};
email.forEach(reminder);
// // You want to simulate a login system that tries to log in a user.The first two attempts fail, but the third 
// // succeeds.Write a function tryLogin() that uses a counter and Promises.Use setTimeout to simulate a 1 - 
// // second delay between attempts.Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.
// PSEUDOCODE
// Declare a variable attempt
// create a function that takes in a new promise
// create an acync function that sends a message after two attempts for failed to log in.
// and an messsage for login sucessfull on the second attempt
let attempt = 1
function tryLogin(){
const login = new Promise(resolve=>setTimeout(resolve)) 
     return login
}
async function attempts(){
    const interval = setInterval(()=>{
          console.log("Login attempt has failed");
        attempt ++
        if (attempts === 3){
            clearInterval(interval)
        console.log("Login attempt was succssesful")
    }
    },1000)

}
attempts();
// Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval.When 
// the countdown reaches 0, stop the interval and log "Time's up!".
// Pseudocode
// initiate a count that counts from 5 to 0
// Set timer to count down from 5 to 0 in every 100ms

let count = 5

const timer= setInterval(()=>{
console.log (count);
count--
if (count < 0){
    clearInterval(timer);
    console.log("Time is up");
    
}
},1000);


// You are simulating a page that loads data in stages.Create an async function called loadPage()
//  that: logs "Loading header...", waits 1 second; logs "Loading content...", waits 2 seconds; logs
//  "Loading footer...", waits 1 second; and finally logs "Page fully loaded".Use setTimeout inside
//  Promises and await them in sequence.

// PSEUDOCODE
// create a function that takes in time
// create a promise to that resolves after every 1000ms
function loading (time){
    return new Promise(resolve => setTimeout(resolve,time));
}

async function loadpage(){
    console.log("Loading header...");
    await loading(1000);

    console.log("Loading contentent...");
    await loading(2000);

     console.log("Load footer...");
    await loading(1000);
    
    console.log("Page fully loaded");
    
}

loadpage()

// You are simulating fetching stock prices with delays.Write a function fetchPrice(symbol) that returns 
// a Promise which resolves after 2 seconds with the message "Price for [symbol] retrieved".Use async / await
//  to call it for two different stocks("AAPL" and "GOOG") and log the messages in order.	Login page title
// 	LP123	Verify the title is at the top centre	"- Registered user

// PSEUDOCODE
// Create a function that takes in a symbol and returns a message after 2000ms
// create an async function that returns a message for the symbol after it has been retrived

function fetchPrice(symbol){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`Price for ${symbol} retrieved`);
        }, 2000);
    });
}

async function getPrices(){
    const stock1 = await fetchPrice("AAPL");
    console.log(stock1);

    const stock2 = await fetchPrice("GOOG");
    console.log(stock2);   
}

getPrices();