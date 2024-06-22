'use client'
import { DeviceSettings, VideoPreview, useCall } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function MeetingSetup({setisSetup}:{setisSetup :(value:boolean)=>void}){

    const [isMicCamToggle,setisMicCamToggle] = useState(false)
    const call = useCall();

    if (!call){
        throw new Error("Call required")
    }
    useEffect(()=>{
        if(isMicCamToggle){
            call?.camera.disable()
            call?.microphone.disable()
        }
        else{
            call?.camera.enable()
            call?.microphone.enable()
        }
        
    },[isMicCamToggle,call?.camera,call?.microphone])
    return(
        <div className=" flex h-screen w-full flex-col items-center justify-center gap-3 text-white">

            <h1 className="test-2xl font-bold">SetUp</h1>
            <VideoPreview/>
            <div className="flex h-16 items-center justify-center gap-3">
                <label className="flex items-center justify-center gap-2 font-medium">
                    <input type="checkbox" checked={isMicCamToggle} onChange={(e)=> setisMicCamToggle(e.target.checked)}/>
                    Join with mic and camera off    
                </label>
                <DeviceSettings/>
            </div>

            <Button className="rounded-md bg-green-500 px-4 py-2" onClick={()=>{call.join() 
                setisSetup(true)
            }}>
                Join Meeting

            </Button>

        </div>
    )
}