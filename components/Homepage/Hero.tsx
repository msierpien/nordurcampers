'use client';
import { ResponsiveImageType } from "react-datocms/image";
import DatoImage from "../DatoImage";
import DividerBottom from "../Divider/DividerBottom";

interface HeroProps {

    hero: {
      responsiveImage?: ResponsiveImageType; // Wykorzystanie typu ResponsiveImageType
    };

  
}



const Hero: React.FC<HeroProps> = ({ hero }) => {
  return (
    <div>
      <section className=' max-h-screen relative overflow-hidden rounded-t-3xl  w-full'>
        <div className='relative'>
          <DatoImage
            pictureClassName="xl:w-auto xl:h-auto "
            layout="responsive"
            // @ts-ignore
            fragment={hero?.responsiveImage || undefined}
          />

        </div>
        <DividerBottom className='fill-white  max-h-[30px] translate-x-10' />
      </section>
    </div>
  )
}

export default Hero
