// src/components/social-icons.tsx
'use client';

import { Instagram, Facebook } from 'lucide-react';

export function SocialIcons() {
  return (
    <div className="flex justify-center gap-6 mt-8">

      <a 
        href="https://instagram.com/beautybotmx" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-[#F4BEF3] transition-colors"
      >
        <Instagram size={24} />
      </a>
      <a 
        href="https://facebook.com/beautybotmx" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-[#F4BEF3] transition-colors"
      >
        <Facebook  size={24} />
      </a>
    </div>
  );
}