'use client'
import dynamic from 'next/dynamic';

const DynamicSliderComponent = dynamic(
    () => import('@/components/sliderComponent'),
    { ssr: false }
  );
  

export default function Popular({ movieData }) {
    return (
        <DynamicSliderComponent title={"Popular"} movieData={movieData}/>
    )
}