'use client'
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function Footer(){

    const handleScrollUp = () => {
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
    }
    return(
        <div className="bg-[#c7b9d9] flex flex-col justify-around" style={{minHeight:"15vh", maskImage: 'linear-gradient(360deg, transparent 0, rgb(36,36,40) 0%, rgb(36,36,40) 80%, transparent)' }}>
            <div className="flex justify-center items-center cursor-pointer" onClick={handleScrollUp}>
                <BsArrowUpCircleFill/><p>Back to Top</p>
            </div>
            <p className="flex justify-center">Developed by Shashank Betawar</p>
        </div>
    )
}