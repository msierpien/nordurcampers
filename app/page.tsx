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
import Hero from '@/components/Homepage/Hero';
import  Content  from '@/components/Homepage/Content';
import Gallery from '@/components/Homepage/Gallery';
import Article from '@/components/Homepage/Article';



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
            {/* @ts-ignore */}
            <Hero hero={homepage.hero} />
            <Reservation  />
            <Content homepage={homepage} />
            {/* @ts-ignore */}
            <Gallery photoshoots={photoshoots} />
            {/* @ts-ignore */}
            <Article homepage={homepage} />
        </>
      )}
    </main>
  );
}
