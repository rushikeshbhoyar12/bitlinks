import clientPromise from "@/lib/mongodb";
import next from "next";



import { NextResponse } from "next/server";


export async function POST(request) {
    const body= await request.json();

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

   


    const doc=await collection.findOne({shorturl:body.shorturl})
    if(doc){
        return NextResponse.json({success:false,
            error:true,message:"Short URL already exists"})
    }else{
        await collection.insertOne({
        url:body.url,
        shorturl:body.shorturl
    })
    }


  //  const data = await request.json();//converts the request into js object here first it convert into text or string and then we convert it into js object by using parse method
    // console.log(data)// prints the data which we send from frontend in console if we send {name:"Harry",role:"Coder"} from frontend then it will print {name:"Harry",role:"Coder"} in console
    return NextResponse.json({success:true,error:false,message:"URL generated successfully",data:body})
}
