"use client";
import Link from 'next/link';
import NavLink from './NavLink';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';
import { Monoton } from 'next/font/google';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

function NavBar() {
    const [navBarOpen, setNavBarOpen] = useState(false)
    const [toggle, setToggle] = useState(true);

    const handleLightBtnClick = () => {
        setToggle(false);
    }
    const handleDarkBtnClick = () => {
        setToggle(true);
    }

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={"/"}
                    className='text-2xl md:text-5xl text-white font-semibold'
                >
                    LOGO
                </Link>
                <div className='mobile-menu block md:hidden '>
                    {
                        !navBarOpen ? (
                            <button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-5 w-5' />
                            </button>
                        ) : (
                            <button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5' />
                            </button>
                        )}
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar' >
                    <ul className='flex p-4 md:p-0 sd:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {

                    toggle ?
                        (
                            <button onClick={handleLightBtnClick}>
                                <SunIcon className='h-8 w-8' />
                            </button>
                        ) : (
                            <button onClick={handleDarkBtnClick}>
                                <MoonIcon className='h-8 w-8' />
                            </button>
                        )
                }
            </div>
            {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default NavBar