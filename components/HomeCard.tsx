import { cn } from "@/lib/utils";
import Image from "next/image";


interface HomeCardProps{
    className : string,
    img:string,
    title:string,
    description:string,
    handleClick: ()=> void
}

export default function HomeCard({className,img,title,description,handleClick}:HomeCardProps){
    return (
        <div className={cn(' px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded cursor-pointer ',className)}
            onClick={handleClick}>
                <div className="flex-center glassmorphism size-12 rounded-[10px]">
                <Image
                    src={img}
                    alt="add"
                    width={25}
                    height={25}
                />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-lg font-normal">{description}</p>
                </div>
            </div>
    )
}