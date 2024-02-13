import { NextResponse } from "next/server";

export function DELETE(request,{params}){
    console.log(params); // { usersid: '450' }
    // const user_id=params.usersid; // 450 

    const {usersid,title}=params;// destructure 
    console.log(usersid);
    console.log(title);

    return NextResponse.json({
        massage:"delete test",
        status:"true"
    })
}