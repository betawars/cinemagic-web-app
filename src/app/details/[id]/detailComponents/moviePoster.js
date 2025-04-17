'use client'
import { useState } from 'react'
import Image from 'next/image'
import LoadingSpinner from "@/components/loadingSpinner"

export default function MoviePoster({ src, alt }) {
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div className="relative">
      {isLoading && <LoadingSpinner />}
      <Image
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={src}
        alt={alt}
        height={384}
        width={256}
        style={{ objectFit: "contain" }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}