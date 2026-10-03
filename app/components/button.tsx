"use client"

import { getAllCountries } from "../lib/countries"

export default function ButtonTest(){
    const handleClick = async() => {
        await getAllCountries()
    }
    return(
        <button onClick={handleClick} className="cursor-pointer hover:bg-amber-500 text-2xl bg-amber-600">Click</button>
    )
}