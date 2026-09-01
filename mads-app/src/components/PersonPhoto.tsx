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
  fit = 'cover',
}) => (
  <span className={`relative isolate block overflow-hidden bg-[#1C1C20] ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={
        fit === 'contain'
          ? 'absolute inset-0 h-full w-full object-contain object-center p-[4%]'
          : 'absolute inset-0 h-full w-full object-cover object-[center_22%]'
      }
    />
  </span>
);
