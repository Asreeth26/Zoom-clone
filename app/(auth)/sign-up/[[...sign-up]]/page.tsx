import { SignUp } from "@clerk/nextjs"
import React from "react"
export default function Signup(){
    return(
        <main className="flex h-screen w-full items-center justify-center">
            <SignUp/>
        </main>
    )
}