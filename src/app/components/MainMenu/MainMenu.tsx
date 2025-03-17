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
            <div className={`button-menu w-[20px] absolute right-[16px] top-[16px] z-20 ${opened ? 'close-icon' : 'open-icon'}`} onClick={toggleMenu}>
                <div className={`line-hamb-menu bg-neutral-50 transition-all border-2 w-full mt-1 ${ opened ? 'border-neutral-50' : 'border-neutral-900' }`}></div>
                <div className={`line-hamb-menu bg-neutral-50 transition-all border-2 w-full mt-1 ${ opened ? 'border-neutral-50' : 'border-neutral-900' }`}></div>
                <div className={`line-hamb-menu bg-neutral-50 transition-all border-2 w-full mt-1 ${ opened ? 'border-neutral-50' : 'border-neutral-900' }`}></div>
            </div>
            <div className={ `main-menu fixed top-0 w-full h-screen bg-neutral-900/90 p-16 flex justify-start transition-all z-10 ${opened ? 'left-0' : '-left-full'}` }>
                <ul>
                    <li>
                        <Link href="/" className="text-neutral-50 text-3xl text-left block underline my-8" onClick={toggleMenu}>Inicio</Link>
                    </li>
                    <li>
                        <Link href="/pages/player-mode" className="text-neutral-50 text-3xl text-left block underline my-8" onClick={toggleMenu}>Player mode</Link>
                        <ul className="pl-8 ml-8 border-l-4 border-dashed border-neutral-50">
                            <li>
                                <Link href="/pages/player-mode/seasons" className="text-neutral-50 text-3xl text-left block underline my-8" onClick={toggleMenu}>Temporadas</Link>
                            </li>
                            <li>
                                <Link href="/pages/player-mode/end-season" className="text-neutral-50 text-3xl text-left block underline my-8" onClick={toggleMenu}>Finalizar una temporada</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/pages/manager-mode" className="text-neutral-50 text-3xl text-left block underline my-8" onClick={toggleMenu}>Manager mode</Link>
                        <ul className="pl-8 ml-8 border-l-4 border-dashed border-neutral-50">
                            <li>
                                <Link href="/pages/manager-mode/player-stats" className="text-neutral-50 text-3xl text-left block underline my-8" onClick={toggleMenu}>Player Stats</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}