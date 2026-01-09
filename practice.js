//singleton
//object.create

// const { jsx } = require("react/jsx-runtime");

//object literals

const mySym = Symbol("key1");
 
const Jsuser = {
    name : "Keshav",
    "full name" : "Keshav soni" ,
    [mySym] : "key1" ,
    age :  19 ,
    locatioon : "Jaipur",
    email : "keshav@123gmail.com",
    isLoggedIn : false ,
    lastLoginDays : ["monday" , "Saturday"]
};

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser['full name']);
// console.log(Jsuser[mySym]);

// Jsuser.email = "keshav@321googgle.com";
// Object.freeze(Jsuser);
// Jsuser.email = "keshav@321microsoft.com";
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log(`Hello Jsuser`);
}

Jsuser.greetingTwo = function(){
    console.log(`Hello Jsuser , ${this["full name"]}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

