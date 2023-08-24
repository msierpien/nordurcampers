'use client'
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import Link from 'next/link';
import { ActiveLink } from './ActiveLink';
import { WhatsappIcon } from './WhatsappIcon';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/', label: 'Go' },
  { href: '/about', label: 'Wyposażenie' },
  { href: '/faq', label: 'FAQ' },
  { href: '/islandia', label: 'O Islandii' },
  { href: '/contact', label: 'Kontakt' },

];

function MenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <ActiveLink
      className="p-2 px-4  decoration-accent decoration-4 underline-offset-4 hover:underline hover:decoration-accent/25"
      activeClassName="underline hover:decoration-accent"
      href={href}
    >
      {children}
    </ActiveLink>
  );
}

export function NavigationMenu({ phoneNumber }: {
  phoneNumber?: string | null
}) {
  const pathname = usePathname()
  return (
    <div className='sticky w-full top-0 z-50 flex justify-center  bg-white/90 backdrop-blur-sm md:bg-transparent'>
      <div className='container relative flex flex-row justify-between items-baseline p-2 w-full my-1 md:my-10 md:mt-5 rounded-b-3xl'>
        <div>
          <MenuItem href='/'>Logo</MenuItem>
        </div>
        <div className=" md:flex flex-row hidden text-black md:flex-row md:border bg-white/70 backdrop-blur-sm border-black rounded-full shadow-2xl">
          {menuItems.map((item, index) => (
            <MenuItem key={index} href={item.href}>
              {item.label}
            </MenuItem>
          ))}
        </div>
        <div className='flex justify-between'>
          <Link className='bg-prmary p-2 text-sm md:p-2 px-2  md:px-6  text-white rounded-full shadow-xl' href='/rezerwacja' >Rezerwacja</Link>
          <Menu as="div" className=" inline-block text-left">
            <div>
              <Menu.Button className="bg-secondary p-2 ml-2 text-sm md:p-2 px-2  md:px-6 text-white rounded-full shadow-xl md:hidden">
                Menu
              </Menu.Button>
            </div>
            <Menu.Items className="absolute top-16 left-1/2 mt-2 -translate-x-2/4 bg-white rounded-xl shadow-xl focus:outline-none w-[50vw] ">
              <div className="p-1 py-3 flex flex-col items-center">
                {menuItems.map((item, index) => (
                  
                  <Menu.Item key={index}>
                    {({ active = pathname === item.href }) => (
                      <>
                      <Link href={item.href} className={`text-xl p-1.5 ${active ? 'text-blue' : 'text-black'}`}>{item.label}   <p>{active}</p></Link>
                      {console.log(`${active} ${item.href} ${pathname}`)}
                      </>
                   
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>

          </Menu>
        </div>
      </div>
    </div>
  );
}
