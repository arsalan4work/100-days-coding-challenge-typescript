// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// This profile sets itself up and can share info about the user
let userProfile = (function () {
    // The user's details are kept inside
    let name = "Arsalan";
    let age = 19;
    let home = "North Nazimabad H Block";
    //This part shares the user details
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}, Home: ${home}`);
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user name and age
export {};
// We made a self-setup profile that can talk about the user
