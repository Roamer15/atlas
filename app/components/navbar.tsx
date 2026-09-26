import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="flex w-full flex-wrap items-center justify-between p-4 border-b-2 border-solid border-b-(--color-divider) gap-x-2 gap-y-6">
            <div className="flex items-center gap-2 text-[20px] font-extrabold mr-auto">
                <div className="bg-(--color-accent) w-3 h-3"/>
                <Link className="" href={`/`}>Atlas</Link>
            </div>
            <div className="flex gap-2 text-(--color-accent) text-[14px]">
                <Link href={`/countries`}>Countries</Link>
                <Link href={`/regions`} className="text-(--color-text)">Regions</Link>
            </div>
        </nav>
    )
}