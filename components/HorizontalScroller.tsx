'use client';

import { useRef, useEffect, ReactNode } from 'react';


export function HorizontalScroller({ children }: { children: ReactNode }) {


  return (
    <div
      className="flex flex-col md:flex-row gap-16"
   
    >
      {children}
    </div>
  );
}
