import Image from "next/image";

export default function SliderContent({activeIndex,sliderImage}){
    return(
        <section>
            {sliderImage.map((slide,index)=>(
                <div
                    key={index}
                    className={index === activeIndex?"slides active":"inactive"}
                >
                    <Image className="slide-image" src={slide.urls} alt = "" width={2000} height={2000}/>
                    <h2 className="slide-title">{slide.title} </h2>
                    <h3 className="slide-text"> {slide.description} </h3>
                </div>
            ))}
        </section>
    )
}