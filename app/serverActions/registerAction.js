
"use server"

import DBconnection from "../utils/config/db"
import UserModel from "../utils/models/User"
import bcrypt from 'bcrypt'

export async function registerAction(registerDetails){
        // console.log("server output detials",registerDetails)
        await DBconnection()

       const existingUser =  await UserModel.findOne({email: registerDetails.email})
  
        if(existingUser){
                console.log("this is already taken")
                throw new Error("Email already taken")
        }

        const hashedPassword = await bcrypt.hash(registerDetails.password, 10);

        await UserModel.create({...registerDetails, password: hashedPassword});

        return {success:true}
} 