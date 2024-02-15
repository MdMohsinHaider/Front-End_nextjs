import {connectDB} from "@/helper/db";
import { NextResponse } from "next/server";
connectDB();
export function GET(request) {
    const users = [
        {
            name: "devil",
            phone: 12345678
        },
        {
            name: "Md mohsin",
            phone: 12345678
        },
        {
            name: "devil hell",
            phone: 12345678
        }
    ]
    return NextResponse.json(users);
};










export async function POST(request) {
    // const body = request.body;
    // console.log(body);
    // console.log(request.method);
    // console.log("app ka cookesis"+request.cookies);
    // console.log("app ka header hai "+request.headers);

    // const textData =await request.text();
    // console.log(textData);

    const jsonData = await request.json();
    console.log(jsonData);

    return NextResponse.json({
        massage: "posting user data",
    })
};










export function DELETE(request) {
    console.log("detete method");
    return NextResponse.json({
        massage: "deleted method delete req",
        status: "true"
    })
};





export function PUT() { };