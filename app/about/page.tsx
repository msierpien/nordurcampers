
import DatoImage from '@/components/DatoImage';
import { request } from '@/lib/dato';
import { toNextMetadata } from 'react-datocms/seo';
import {
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms/structured-text';

import { Metadata } from 'next';

import query from './page.graphql'
import AbouteContent from './AboutContent';

const getAboutPageContent = async () => await request(query);

export async function generateMetadata(): Promise<Metadata> {
  const { aboutPage } = await getAboutPageContent()

  return toNextMetadata(aboutPage?._seoMetaTags || [])
}

export default async function Home() {
  const { aboutPage } = await request(query, {});

  if (!aboutPage) {
    return null;
  }

  return (
    // @ts-ignore
    <AbouteContent aboutPage={aboutPage} />

  );
}