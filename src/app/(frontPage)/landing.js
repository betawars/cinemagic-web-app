import Slider from "./(carousal)/slider";
import NowShowing from "./nowShowing";
import Popular from "./popular";
import TopRated from "./topRated";

export default function Landing(){
    return (
        <div>

            <div>
                <Slider/>
            </div>
            <div className="w-full max-w-8xl mx-auto p-4 sm:p-6 md:p-10 flex flex-col gap-6">
                <NowShowing />
                <Popular />
                <TopRated />
            </div>
        </div>
      );
}