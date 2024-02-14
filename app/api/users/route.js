import { NextResponse } from "next/server"

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

export function POST(request) {
    const body = request.body;
    console.log(body);
    return NextResponse.json({
        massage:"posting user data"
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