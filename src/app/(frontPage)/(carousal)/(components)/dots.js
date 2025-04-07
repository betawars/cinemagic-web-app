export default function Dots({activeIndex, onClick, sliderImage}){
    return(
        <div className="all-dots">
            {sliderImage.map((slide,index)=>{
                <span
                    key={index}
                    className={`${activeIndex === index?"dot active-dot":"dot"}`}
                    onClick={()=>onClick(index)}
                ></span>
            })}

        </div>
    )
}