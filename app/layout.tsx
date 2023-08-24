import './globals.css';
import { Playfair_Display, Poppins } from 'next/font/google';
import { ActiveLink } from '@/components/ActiveLink';
import { WhatsappIcon } from '@/components/WhatsappIcon';
import { NavigationMenu } from '@/components/NavigationMenu';
import { request } from '@/lib/dato';
import { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { renderMetaTags } from 'react-datocms/seo';
import { graphql } from '@/gql';
import Footer from '@/components/Footer';

const query = graphql(/* GraphQL */ `
  query Layout {
    site: _site {
      faviconMetaTags {
        tag
        attributes
        content
      }
    }
    contactPage {
      phoneNumber
    }
    theme {
      accentColor {
        red
        green
        blue
      }
      highlightColor {
        red
        green
        blue
      }
    }
  }
`);

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  weight: '700',
  display: 'swap',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin'],
});

function colorToRule(color: { red: number; green: number; blue: number }) {
  return `${color.red} ${color.green} ${color.blue}`;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, site, contactPage } = await request(query);

  return (
    <html lang="en" >
      {renderMetaTags(site.faviconMetaTags)}
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} font-sans mx-4 md:mx-10 text-black overflow-x-hidden relative`}
        style={
          theme
            ? ({
              '--color-accent': colorToRule(theme.accentColor),
              '--color-highlight': colorToRule(theme.highlightColor),
            } as CSSProperties)
            : undefined
        }
      >
        <div className='w-full '>
          <NavigationMenu phoneNumber={contactPage?.phoneNumber} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
