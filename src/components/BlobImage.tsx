import React, { useRef, useEffect } from 'react';

interface BlobImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlobImage: React.FC<BlobImageProps> = ({ src, alt, className }) => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    // Set stable circular clip-path
    blob.style.clipPath = 'circle(50% at 50% 50%)';
    (blob.style as any).webkitClipPath = 'circle(50% at 50% 50%)';

    // Add smooth rotation and scale pulse animation
    blob.style.animation = 'rotatePulse 6s infinite ease-in-out';

    return () => {
      if (blob) {
        blob.style.animation = '';
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes rotatePulse {
            0%, 100% {
              transform: rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(10deg) scale(1.05);
            }
          }
        `}
      </style>
      <div
        ref={blobRef}
        className={className}
        style={{
          overflow: 'hidden',
          borderRadius: '50%',
        }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </>
  );
};

export default BlobImage;
