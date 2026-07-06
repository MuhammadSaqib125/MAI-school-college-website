"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-school-white/90 backdrop-blur-md border-b border-school-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.jpg" alt="MAI School Logo" width={50} height={50} className="rounded-full object-cover shadow-sm" />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-extrabold text-school-black leading-tight uppercase tracking-wide">MAI</span>
                <span className="text-[10px] md:text-xs font-bold text-school-gray leading-tight uppercase tracking-widest">School & College</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-school-gray hover:text-school-black transition-colors font-medium">Home</Link>
            <Link href="/about" className="text-school-gray hover:text-school-black transition-colors font-medium">About Us</Link>
            <Link href="/facilities" className="text-school-gray hover:text-school-black transition-colors font-medium">Facilities</Link>
            <Link href="/admissions" className="text-school-gray hover:text-school-black transition-colors font-medium">Admissions</Link>
            <Link href="/contact" className="text-school-gray hover:text-school-black transition-colors font-medium">Contact</Link>
            <a 
              href="https://eduportal.nitesstudios.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border-2 border-school-yellow text-school-black font-semibold rounded-full hover:bg-school-yellow transition-all"
            >
              Admin Portal
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-school-black">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-school-white border-b border-school-black/10 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-school-gray hover:text-school-black hover:bg-school-yellow/10 rounded-md">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-school-gray hover:text-school-black hover:bg-school-yellow/10 rounded-md">About Us</Link>
            <Link href="/facilities" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-school-gray hover:text-school-black hover:bg-school-yellow/10 rounded-md">Facilities</Link>
            <Link href="/admissions" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-school-gray hover:text-school-black hover:bg-school-yellow/10 rounded-md">Admissions</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-school-gray hover:text-school-black hover:bg-school-yellow/10 rounded-md">Contact</Link>
            <a 
              href="https://eduportal.nitesstudios.com/" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center px-5 py-3 border-2 border-school-yellow text-school-black font-semibold rounded-full hover:bg-school-yellow transition-all"
            >
              Admin Portal
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
