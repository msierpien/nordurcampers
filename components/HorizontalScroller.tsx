'use client';

import { useRef, useEffect, ReactNode } from 'react';


export function HorizontalScroller({ children }: { children: ReactNode }) {


  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 ">
      {children}
    </div>
  );
}
