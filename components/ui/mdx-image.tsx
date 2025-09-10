import Image from "next/image"
import { cn } from "@/lib/utils"

interface MdxImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function MdxImage({
  src,
  alt,
  className,
  width = 800,
  height = 400,
  ...props
}: MdxImageProps) {
  return (
    <div className={cn("my-6 flex justify-center", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...props}
      />
    </div>
  )
}