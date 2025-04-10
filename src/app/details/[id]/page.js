"use client"
import { usePathname } from "next/navigation"

export default function MovieDetails(){

    const params = usePathname()

    return(<div>
        movie details{params.split("/").slice(-1)[0]}
    </div>)

}