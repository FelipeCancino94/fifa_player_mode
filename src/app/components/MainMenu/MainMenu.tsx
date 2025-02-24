"use client"

import { useState } from "react";
import './MainMenu.css';
import Link from "next/link";

export function MainMenu() {
    const [opened, setOpened] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setOpened(!opened);
    }

    return (
        <>
            <div className={`button-menu w-[20px] absolute right-[16px] top-[16px] z-10 ${opened ? 'close-icon' : 'open-icon'}`} onClick={toggleMenu}>
                <div className={`line-hamb-menu bg-neutral-50 transition-all border-2 w-full mt-1 ${ opened ? 'border-neutral-50' : 'border-neutral-900' }`}></div>
                <div className={`line-hamb-menu bg-neutral-50 transition-all border-2 w-full mt-1 ${ opened ? 'border-neutral-50' : 'border-neutral-900' }`}></div>
                <div className={`line-hamb-menu bg-neutral-50 transition-all border-2 w-full mt-1 ${ opened ? 'border-neutral-50' : 'border-neutral-900' }`}></div>
            </div>
            <div className={ `main-menu fixed top-0 w-full h-screen bg-neutral-900/60 p-16 flex justify-center transition-all ${opened ? 'left-0' : '-left-full'}` }>
                <ul>
                    <li>
                        <Link href="/" className="text-neutral-50 text-5xl text-center block underline my-8" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li>
                        <Link href="/seasons" className="text-neutral-50 text-5xl text-center block underline my-8" onClick={toggleMenu}>Seasons</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}