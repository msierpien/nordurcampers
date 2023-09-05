'use client'
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { ActiveLink } from './ActiveLink';
import { usePathname } from 'next/navigation';
import Language from './Language';

const menuItems = [
  { href: '/', label: 'Go' },
  { href: '/about', label: 'Wyposażenie' },
  { href: '/faq', label: 'FAQ' },
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
    <div className='sticky left-0 w-full top-0 z-50 flex justify-center  bg-white/90 backdrop-blur-sm md:backdrop-blur-0 md:bg-transparent'>
      <div className='container relative flex flex-row justify-between items-baseline p-2 w-full my-1 md:my-2  rounded-b-3xl'>
        <div>
          <MenuItem href='/'>Logo</MenuItem>
        </div>
        <div className=" md:flex flex-row hidden text-black md:flex-row md:border bg-white/70 backdrop-blur-sm  border-black rounded-full shadow-2xl">
          {menuItems.map((item, index) => (
            <MenuItem key={index} href={item.href}>
              {item.label}
            </MenuItem>
          ))}
        </div>
        <div className='flex justify-between items-baseline'>
          <Link className='bg-primary p-2 text-sm pl-6  border-y border-r border-black  text-white rounded-l-full  shadow-xl' href='/rezerwacja' >Rezerwacja</Link>
          <Language />
          <Menu as="div" className=" block">
              <Menu.Button className="bg-secondary p-2 text-sm md:p-2 px-2 rounded-r-full border-y border-r border-black pr-4 text-white  shadow-xl md:hidden">
                Menu
              </Menu.Button>
            <Menu.Items className="absolute top-16 left-1/2 mt-2 -translate-x-2/4 bg-white rounded-xl shadow-xl focus:outline-none w-[50vw] ">
              <div className="p-1 py-3 flex flex-col items-center">
                {menuItems.map((item, index) => (
                  
                  <Menu.Item key={index}>
                    {({ active = pathname === item.href }) => (
                      <>
                      <Link href={item.href} className={`text-xl p-1.5 ${active ? 'text-blue' : 'text-black'}`}>{item.label}   <p>{active}</p></Link>
                
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
