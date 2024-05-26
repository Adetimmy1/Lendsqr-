"use server"
import { AuthenticateUser } from "@/components/Authentication";

export async function loginAction(email, password){

    if (AuthenticateUser(email, password)) {
        
        console.log(email, password)

    };
    if (!AuthenticateUser(email, password)) console.log("incorrect");
}