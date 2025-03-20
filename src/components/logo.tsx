// src/components/logo.tsx
import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex justify-center items-center my-8">
      <Image 
        src="/images/logo.png" 
        alt="BeautyBot.mx Logo" 
        width={200} 
        height={200} 
        className="h-auto"
        priority
      />
    </div>
  );
}