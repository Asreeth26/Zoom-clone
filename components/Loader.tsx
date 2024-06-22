import Image from "next/image"

export default function tokenProvider(){
    return(
        <div className="flex-center h-screen w-full">
            <Image
            
            src='/icons/loading-circle.svg'
            alt="Loading"
            width={60}
            height={60}
            />

        </div>

    )

    
}