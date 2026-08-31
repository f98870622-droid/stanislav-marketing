import React from 'react';

interface PersonPhotoProps {
  src: string;
  alt: string;
  className?: string;
  fit?: 'contain' | 'cover';
}

export const PersonPhoto: React.FC<PersonPhotoProps> = ({
  src,
  alt,
  className = '',
  fit = 'contain',
}) => (
  <span className={`relative isolate block overflow-hidden bg-[#1C1C20] ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={
        fit === 'cover'
          ? 'absolute inset-0 h-full w-full object-cover object-[center_18%]'
          : 'absolute top-1/2 left-1/2 max-h-[92%] max-w-[92%] -translate-x-1/2 -translate-y-1/2 object-contain object-center'
      }
    />
  </span>
);
