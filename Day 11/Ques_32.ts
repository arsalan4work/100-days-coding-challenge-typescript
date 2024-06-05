// Question 32: Checking Usernames: Ensure uniqueness in usernames.

import { log } from "console";

let currentUsers: string[] = ["user1", "admin", "user3", "user4", "user5"];
let newUsers: string[] = ["User2", "User6", "user7", "admin", "User9"];

newUsers.forEach(newUsers => {
    if (currentUsers.some(currentUsers => currentUsers.toLocaleLowerCase() === newUsers.toLowerCase())) {
        console.log(`${newUsers} will need to enter a new username`);
        
    }else {
        console.log(`${newUsers} is available`);
        
    }
});