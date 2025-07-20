import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Image optimization utilities
export function getOptimizedImageProps(src: string, width: number, height: number) {
  return {
    src,
    width,
    height,
    loading: "lazy" as const,
    decoding: "async" as const,
    style: {
      maxWidth: `${width}px`,
      maxHeight: `${height}px`,
    }
  }
}

export function getResponsiveImageSrc(src: string, size: 'small' | 'medium' | 'large' = 'medium') {
  // For now, return the original src since we don't have multiple sizes
  // In a real implementation, you'd have different sized images
  return src
}
