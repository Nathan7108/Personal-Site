import React from 'react';
import { getOptimizedImageProps } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false
}) => {
  const imageProps = getOptimizedImageProps(src, width, height);
  
  return (
    <picture>
      <source 
        srcSet={src} 
        type="image/png"
      />
      <img
        {...imageProps}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : loading}
        decoding="async"
      />
    </picture>
  );
}; 