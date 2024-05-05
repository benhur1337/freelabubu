"use client"
import Image from 'next/image'
import Link from 'next/link'

interface navigationLink {
    labubu: string
    href: string
}

export function Navbar(){

    const NavLinks = [
        {
            labubu:'Home',
            href:'/',
        },
        {
            labubu:'Deposit',
            href:'/deposit'
        },
        {
            labubu:'Withdrawal',
            href:'/withdrawal'
        },
        {
            labubu:'GAMBLE!!!',
            href:'/gamble'
        },
        {
            labubu:'ABOUT US ඞඞඞ',
            href:'/aboutus'
        }
        
    ]

    return (
        <div className='mt-6 p-6 pl-0 flex flex-row items-center justify-evenly border-b-white rounded-[1100px]  border-0 border-b-2 max-w-[1100px] mx-auto'>
            <Link href='/'>
                <Image src='/logo.png' className='hover:scale-110 duration-500' height={200} width={200} alt='logo'></Image>
            </Link>
            {
                NavLinks.map((item:navigationLink, key:number) => (
                    <Link key={key} className='font-semibold text-xl hover:text-[#a4aea8] hover:scale-110 duration-500' href={item.href}>{item.labubu}</Link>
                ))
            }
        
        </div>
    )
}