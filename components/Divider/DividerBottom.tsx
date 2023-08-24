
import React from 'react';

interface DividerProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const DividerBottom: React.FC<DividerProps> = ({ className, ...props }) => {
  const combinedClassName = `absolute -bottom-[1px] fill-white w-[800px] md:w-[1200px] xl:w-full h-[30px] md:h-[50px] xl:[70px] ${className || ''}`;

  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="bottom-divider"
        x="0px"
        y="0px"
        width="2186.6px"
        height="44.2px"
        viewBox="0 0 2186.6 44.2"
        xmlSpace="preserve"
        preserveAspectRatio="none"
        className={combinedClassName}
        {...props}
      >
  
        <polygon
        
          points="0,44.2 110.7,7.2 303.9,33 431,12.7 593.6,33.9 753.3,14.1 925.4,33.9 977,16.9 1088.5,34.7   1322.7,6.1 1500.9,39.6 1690.7,0 1838.5,38.5 2001.9,2.9 2104,31.5 2160.6,22.1 2186.6,44.2 2186.6,44.2 0,44.2 "
        />
      </svg>
    );
  };
  
  export default DividerBottom;
  