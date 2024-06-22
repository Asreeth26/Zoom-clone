import { SignIn } from "@clerk/nextjs"
import React from "react"
export default function Signin(){
    return(
        <main className="flex h-screen w-full items-center justify-center">
            <SignIn/>
        </main>
    )
}