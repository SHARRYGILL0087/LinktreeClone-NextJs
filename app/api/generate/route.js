import ConnectDB from "@/lib/mongodb";
import data from "@/models/links";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json()
        const { profile, links } = body
        const { handle, avatar, description } = profile
        await ConnectDB()
        const isExist = await data.findOne({ handle: handle })
        if (isExist) {
            return NextResponse.json({ msg: "Handle Already Occupied" }, { status: 501 })
        }
        const newdata = new data({ handle, avatar, description, links })
        await newdata.save()
        return NextResponse.json({ msg: "Data Save Sucessfully" }, { status: 201 })

    } catch (error) {
        // console.log('Error while saving data', error)
        return NextResponse.json({ msg: "Error while saving data" }, { status: 500 })
    }

}

export async function GET() {
    try {
        await ConnectDB()
        const AllData = await data.find()
        if (!AllData) {
            return NextResponse.json({ msg: "No Linktree available" }, { status: 501 })
        }
        return NextResponse.json({ msg: "LinkTree Obtained Successfully!", AllData: AllData }, { status: 200 })
    } catch (error) {
        // console.log('Error while getting data', error)
        return NextResponse.json({ msg: "Error while getting data" }, { status: 500 })
    }
}

export async function DELETE(req) {
    try {
        const body = await req.json()
        const {handle} = body
        await ConnectDB()
        await data.findOneAndDelete({handle : handle})
        return NextResponse.json({msg : "Deleted Successfully!"} , {status : 200})
    } catch (error) {
        console.log('Error while deleting data', error)
        return NextResponse.json({ msg: "Error while deletinh data" }, { status: 500 })
    }
}

