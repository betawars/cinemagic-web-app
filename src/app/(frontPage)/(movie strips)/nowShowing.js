'use client'
import dynamic from 'next/dynamic';

const DynamicSliderComponent = dynamic(
    () => import('@/components/sliderComponent'),
    { ssr: false }
  );
  

export default function NowShowing({ movieData }) {
    return (
        <DynamicSliderComponent title={"Now Showing"} movieData={movieData}/>
    )
}