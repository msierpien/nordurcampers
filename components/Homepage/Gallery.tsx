import { ResponsiveImageType } from "react-datocms/image"
import DividerBottom from "../Divider/DividerBottom"
import { HorizontalScroller } from "../HorizontalScroller"
import { Photoshoot } from "../Photoshoot"
import Treeheading from "../TreeHeading"

interface GallrerProps {
    photoshoots: {
        id: string;
        vertical: boolean;
        title: string;
        slug: string;
        image: {
            responsiveImage: ResponsiveImageType;
        }
    }[]
}

const Gallery: React.FC<GallrerProps> = ({photoshoots}) => {

    return(
        <section className=' bg-blue relative pb-16 md:pb-32 w-full '>
            <div className='container  px-4 pb-6 overflow-x-hidden '>
              <div className='relative text-center w-full uppercase my-10 md:my-24  p-2 '>
                <Treeheading title='Zdjęcia wnętrza' className='top-0 text-stone-200 text-md' />
              </div>
              <HorizontalScroller>
                {photoshoots.map((photoshoot) => (
                  <div key={photoshoot.id} className={!photoshoot.vertical ? 'col-span-2' : ''}>
                    {/* @ts-ignore */}
                    <Photoshoot photoshoot={photoshoot} />
                  </div>
                ))}
              </HorizontalScroller>

              <div className='absolute top-0  -translate-x-1/2 left-1/2  bg-blue w-screen h-full -z-10' />
              <DividerBottom className='fill-white  bottom-0   max-h-[50px] -translate-x-16' />
            </div>

          </section>
    )

}
export default Gallery