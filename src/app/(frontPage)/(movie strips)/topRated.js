'use client'
import dynamic from 'next/dynamic';

const DynamicSliderComponent = dynamic(
    () => import('@/components/sliderComponent'),
    { ssr: false }
  );
  

export default function TopRated({ movieData }) {
    return (
        <DynamicSliderComponent title={"Top Rated"} movieData={movieData}/>
    )
}