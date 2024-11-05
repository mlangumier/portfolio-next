'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

interface INavItem {
    label: string;
    href: string;
}

// TODO: Check how to add i18n
const navItems: INavItem[] = [
    { label: 'About me', href: '/' },
    { label: 'Resume', href: 'resume' },
    { label: 'Projects', href: 'projects' },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <header className="flex flex-row justify-between px-8 py-12 shadow-lg">
            {/* Title */}
            <Link
                href={'/'}
                className="flex flex-col items-baseline hover:text-inherit lg:flex-row"
            >
                <div className="flex flex-row items-center gap-4">
                    <span className="size-8 rotate-12 bg-primary" />
                    <h1 className="text-large-25 font-bold lg:leading-[2rem]">Mathieu Langumier</h1>
                </div>
                <p className="text-[1.8rem] font-light uppercase">
                    <span className="invisible px-4 lg:visible">/</span>Frontend Developer
                </p>
            </Link>

            {/* Responsive navigation*/}
            <div
                className={`absolute left-0 top-0 flex h-full w-full transform items-center justify-center bg-grey-light opacity-0 transition duration-500 ease-in-out md:static md:h-auto md:w-auto md:bg-inherit md:opacity-100 ${isOpen && 'opacity-100'}`}
            >
                <ul className="flex flex-col items-center gap-14 pb-[20rem] md:flex-row md:gap-10 md:pb-0">
                    {navItems.map((item: INavItem) => (
                        <Link
                            className={`font-sans text-large-25 font-bold uppercase md:text-large md:font-light ${pathname === item.href && 'text-primary'}`}
                            key={item.label}
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Mobile burger */}
            <div className="flex items-center justify-center pt-4 md:hidden">
                <div onClick={() => setIsOpen(!isOpen)} className="relative h-full w-12">
                    {/* Test: w-14 & w-16 */}
                    <span
                        className={`absolute right-[50%] top-0 h-1.5 w-6 transform rounded-sm bg-primary transition duration-500 ease-in-out ${isOpen && 'translate-x-1 translate-y-3 rotate-45'}`}
                    />
                    <span
                        className={`absolute right-0 top-5 h-1.5 w-12 transform rounded-sm bg-primary transition duration-500 ease-in-out ${isOpen && '-rotate-45'}`}
                    />
                    <span
                        className={`absolute right-0 top-10 h-1.5 w-6 transform rounded-sm bg-primary transition duration-500 ease-in-out ${isOpen && '-translate-x-1 -translate-y-3 rotate-45'}`}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
