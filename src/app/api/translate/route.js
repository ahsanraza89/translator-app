import translate from "google-translate-api-x";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json();
    console.log((data));

    const {text , to } = data;

   try {
    const res = await translate(text, {to});
    console.log(res.text);

    return NextResponse.json({text: res.text });
   } catch (error) {
    return NextResponse.json("error")
   }

    
}