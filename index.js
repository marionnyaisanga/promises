// You are building a system that sends email reminders to users 5 seconds after they register.Create an async function 
// sendReminder(email) that waits 5 seconds using setTimeout and then logs "Reminder sent to [email]".Simulate sending a reminder to 3 users.


let email = ["jane@gmail.com","peter@gmail.com", "rayan@gmail.com"]
function reminder(email){
setTimeout(()=>{
    console.log(`Reminder sent to ${email}`);
    
}, 5000);
};
email.forEach(reminder);




// You want to simulate a login system that tries to log in a user.The first two attempts fail, but the third 
// succeeds.Write a function tryLogin() that uses a counter and Promises.Use setTimeout to simulate a 1 - 
// second delay between attempts.Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.

// function tryLogin(){
//     let attempt = 0
//     function attempts(){
// const login = new Promise ((resolve,reject)=> {
//     attempt++
//     setTimeout(()=>{
//           if (attempt< 3){
//         resolve(`Login attempt ${attempt} has failed`)
//     }else if(loginAttempts ===3){
//         resolve(`Login attempt ${attempt} was sucssesful`);
        
//     }else{
//         reject(`login failed after 3 attempts`)
//     }

//     },1000);
  
// });

// }
// attempts()
// .then((message)=>{
//     console.log(message)})
// .catch((error)=>{
//     console.log(error)});

// }


// Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval.When 
// the countdown reaches 0, stop the interval and log "Time's up!".


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