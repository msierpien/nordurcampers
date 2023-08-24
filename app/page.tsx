import { HorizontalScroller } from '@/components/HorizontalScroller';
import { Tile } from '@/components/Tile';
import { UnwrapStructuredText } from '@/components/UnwrapStructuredText';
import { Photoshoot } from '@/components/Photoshoot';
import { request } from '@/lib/dato';
import { toNextMetadata } from 'react-datocms/seo';
import {
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms/structured-text';
import { FragmentType, graphql, getFragmentData } from '@/gql';

import { Metadata } from 'next';

import query from './page.graphql'
import { Image } from 'react-datocms/image';
import DatoImage from '@/components/DatoImage';
import DividerBottom from '@/components/Divider/DividerBottom';
import Reservation from '@/components/Reservation/Reservation';
import Treeheading from '@/components/TreeHeading';

const getHomepageContent = async () => await request(query);

export async function generateMetadata(): Promise<Metadata> {
  const { homepage } = await getHomepageContent()

  return toNextMetadata(homepage?._seoMetaTags || [])
}



export default async function Home(props: {}) {
  const {
    homepage,
    meta: { count },
  } = await getHomepageContent();







  return (
    <main style={{ counterReset: 'photoshoot-counter' }}>
      {/* {renderMetaTags(homepage?._seoMetaTags || [])} */}

      {homepage && (


        <div className="">
          <div className='flex flex-col rounded-t-3xl overflow-hidden  '>
            <div className='relative max-h-screen w-auto overflow-hidden'>
             
            
              <DatoImage
                pictureClassName="xl:w-auto xl:h-auto "
                layout="responsive"
                //@ts-ignore
                fragment={homepage.hero?.responsiveImage || undefined}


              />

              <DividerBottom />
            </div>
            <div >
              <Reservation />
            </div>

            <div className='bg-stone-200  relative pt-32 p-4 md:p-10'>
              <Treeheading title='CAMP' />
              <DividerBottom className='fill-white top-0 rotate-180' />
              <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20">
              {homepage.title}
            </div>
            <h1 className="text-black font-serif mb-12 text-4xl xl:text-8xl tracking-tight">
              <UnwrapStructuredText
                data={homepage.tagline.value as StructuredTextDocument}
              />
            </h1>
            <div className="leading-loose prose max-w-none">
              <StructuredText
                data={homepage.description.value as StructuredTextDocument}
              />
            </div>
              <DividerBottom className='fill-white max-h-[30px] -translate-x-10' />
            </div>
           
          </div>
        </div>

      )}


    </main>
  );
}
