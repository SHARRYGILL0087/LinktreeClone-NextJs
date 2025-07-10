import mongoose from "mongoose";
import { NextResponse } from "next/server";
import ConnectDB from "@/lib/mongodb";
import User from "@/models/User";


export async function POST(req) {
    try {
        const body = await req.json()
        const { id, password } = body
        console.log(body)

        await ConnectDB()

        const isExist = await User.findOne({
            $or: [
                { email: id },
                { username: id }
            ]
        })

        if(!isExist){
            return NextResponse.json({ msg: "User not found" }, { status: 404 });
        }


        if(isExist.password !== password){
            return NextResponse.json({msg : "Incorrect Password"} , {status : 401})   
        }

        return NextResponse.json({ msg: 'Login Successfull ', isExist }, { status: 201 })
    } catch (error) {
        console.log("Error while login logic : ", error.message)
        return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
    }
} 