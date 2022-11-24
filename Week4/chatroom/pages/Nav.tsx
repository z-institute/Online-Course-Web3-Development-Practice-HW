
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
} from "@rainbow-me/rainbowkit";

import logo from '../assets/imgs/Ww.png'
import Image from 'next/image';

export default function Nav() {
  return(
    <nav className="bg-gray-800">
      <div className="max-w-7xl w-full mx-auto px-4 h-[64px] sm:px-6 lg:px-8">
        <div className="h-full flex item-center justify-between">

          <div className="flex items-center justify-between h-16">
            <div className="mt-1 mr-6">
              <Image alt="Logo" width={54} height={44} src={logo}/>
            </div>
            <div className="text-gray-100 font-bold text-2xl md:block">
              Web3 Forum
              <span className="text-gray-400 text-lg font-medium ml-20">
                Homework #4 (Walter 🚀 Z22096002)
              </span>
            </div>
          </div>

          <div className="py-4 flex flex-col justify-center items-center">
            <ConnectButton />
          </div>

        </div>
      </div>
    </nav>
  )
}