import { BsArrowUpCircleFill } from "react-icons/bs";

export default function Footer(){
    return(
        <div className="bg-[#c7b9d9] flex flex-col justify-center" style={{minHeight:"15vh", maskImage: 'linear-gradient(360deg, transparent 0, rgb(36,36,40) 0%, rgb(36,36,40) 80%, transparent)' }}>
            <div className="flex justify-center items-center cursor-pointer">
                <BsArrowUpCircleFill/><p>Back to Top</p>
            </div>
            <p className="flex justify-center">Developed by Shashank Betawar</p>
        </div>
    )
}