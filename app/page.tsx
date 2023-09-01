import { HorizontalScroller } from '@/components/HorizontalScroller';
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



export default async function Home() {
  const {
    homepage,
    photoshoots,
    meta: { count },
  } = await getHomepageContent();







  return (
    <main className='flex flex-col relative container items-center overflow-x-hidden '>
      {/* {renderMetaTags(homepage?._seoMetaTags || [])} */}
      {homepage && (
        <>
          <section className=' max-h-screen relative overflow-hidden rounded-t-3xl  w-full'>
            <div className='relative'>
              <DatoImage
                pictureClassName="xl:w-auto xl:h-auto "
                layout="responsive"
                //@ts-ignore
                fragment={homepage.hero?.responsiveImage || undefined}
              />

            </div>
            <DividerBottom className='fill-white  max-h-[30px] translate-x-10' />
          </section>

          <section className='w-full'>
            <div className='overflow-x-hidden relative'>
              <Reservation />
            </div>
          </section>

          <section className='bg-stone-200 pt-32  p-4 md:p-10 relative overflow-hidden w-foll' >
            <div className='overflow-hidden'>
              <DividerBottom className='fill-white top-0 rotate-180' />
              <Treeheading title='CAMP' className='top-5 ' />
              <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20">
                {homepage.title}
              </div>
              <h1 className="text-black font-serif mb-12 text-4xl xl:text-8xl tracking-tight">
                <UnwrapStructuredText
                  data={homepage.tagline.value as StructuredTextDocument}
                />
              </h1>
              <div className="leading-loose prose max-w-none text-base md:text-xl">
                <StructuredText
                  data={homepage.description.value as StructuredTextDocument}
                />
              </div>
              <DividerBottom className='fill-blue max-h-[30px] -translate-x-10' />

            </div>
          </section>

          <section className=' bg-blue relative pb-16 md:pb-32 w-full '>
            <div className='container  px-4 pb-6 overflow-x-hidden '>
              <div className='relative text-center w-full uppercase my-10 md:my-24  p-2 '>
                <Treeheading title='Zdjęcia wnętrza' className='top-0 text-stone-200 text-md' />
              </div>
              <HorizontalScroller>
                {photoshoots.map((photoshoot) => (
                  <div key={photoshoot.id} className={!photoshoot.vertical ? 'col-span-2' : ''}>
                    <Photoshoot photoshoot={photoshoot} />
                  </div>
                ))}
              </HorizontalScroller>

              <div className='absolute top-0  -translate-x-1/2 left-1/2  bg-blue w-screen h-full -z-10' />
              <DividerBottom className='fill-white  bottom-0   max-h-[50px] -translate-x-16' />
            </div>

          </section>
          <section>
            <div className='container  px-4 pb-6 overflow-hidden'>
              {/* blogpost  */}
              <div className='relative text-center w-full my-10 md:my-24  p-2 '>
                <Treeheading title='Islandia ' className='top-0 text-stone-800 ' />
                <div className='container  mt-10'>
                  <div className="leading-loose prose max-w-none text-justify py-10 text-base md:text-xl">
                    <StructuredText
                      data={homepage.opisIslandia?.value as StructuredTextDocument}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

        </>


      )}
    </main>
  );
}
