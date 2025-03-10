"use client"

import Link from "next/link";
import './home.css';

export default function Home() {
  return <>
    <div className='h-screen'>
      <ul className="flex justify-between items-center h-screen overflow-hidden">
        <li className="h-screen bg-sky-700 flex justify-center items-center w-1/2 relative overflow-hidden">
          <Link href="/pages/player-mode" className="text-neutral-50 text-7xl text-right block absolute bottom-0 right-0 w-96 p-8 leading-none font-black drop-shadow-xl">Manager mode</Link>
        </li>
        <li className="h-screen bg-red-800 flex justify-center items-center w-1/2 relative">
          <Link href="/pages/player-mode" className="text-neutral-50 text-7xl text-left block absolute top-0 left-0 w-96 p-8 leading-none font-black drop-shadow-xl">Player mode</Link>
        </li>
      </ul>
    </div>
  </>
}
