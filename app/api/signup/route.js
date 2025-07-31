import ConnectDB from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstname, lastname, username, email, password } = body;

    await ConnectDB();

    const isExist = await User?.findOne({
      $or: [
        { email: email },
        { username: username }
      ]
    })
    if (isExist) {
      return NextResponse.json({ msg: "Email or Username Already exist" }, { status: 501 });
    }

    if (password.lenght < 8) {
      return NextResponse.json({ msg: "Password should be of 8 characters" }, { status: 402 })
    }

    const hashPassword = await bcrypt.hash(password,10)

    const user = new User({ firstname, lastname, username, email, password :  hashPassword });
    await user.save();

    return NextResponse.json({ msg: "User Created Successfully", user }, { status: 201 });

  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Internal Server Error", error: error.message }, { status: 500 });
  }
}
