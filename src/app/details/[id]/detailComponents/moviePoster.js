'use client'
import { useState } from 'react'
import Image from 'next/image'
import LoadingSpinner from "@/components/loadingSpinner"

export default function MoviePoster({ src, alt }) {
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div className="relative sm:w-25.6 sm:h-38.4">
      {isLoading && <LoadingSpinner />}
      <Image
        // fill
        src={src}
        alt={alt}
        height={384}
        width={256}
        sizes="(min-width: 1700px) 100vw, (min-height: 1700px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "contain" }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}