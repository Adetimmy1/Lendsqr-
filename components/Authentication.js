import user from "@/db/user-db";

export function AuthenticateUser(obj) {
    // Iterate through each user object within the array
    for (let i = 0; i < user.length; i++) {
        const userObject = user[i];
        // Iterate through each user within the user object
        for (const userKey in userObject) {
            if (userObject.hasOwnProperty(userKey)) {
                const currentUser = userObject[userKey];
                // Check if the email and password match
                if (currentUser.email === obj.email && currentUser.password === obj.password) {
                    return true; // Authentication successful
                }
            }
        }
    }
    return false; // Authentication failed
}

