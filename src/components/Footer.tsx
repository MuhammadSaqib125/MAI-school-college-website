import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-school-black text-school-white pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo.jpg" alt="MAI School Logo" width={60} height={60} className="rounded-full object-cover bg-white" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-white leading-tight uppercase tracking-wide">MAI</span>
                <span className="text-xs font-bold text-school-yellow leading-tight uppercase tracking-widest">School & College</span>
              </div>
            </div>
            <p className="text-gray-400">
              Fostering excellence and shaping the leaders of tomorrow with modern education and strong values.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-school-yellow mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-school-white transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="text-gray-400 hover:text-school-white transition-colors">Admissions</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-school-white transition-colors">Contact</Link></li>
              <li><a href="https://eduportal.nitesstudios.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-school-white transition-colors">Admin Portal</a></li>
              <li className="pt-2"><a href="https://play.google.com/store/apps/details?id=com.nitesstudios.schoolhub" target="_blank" rel="noopener noreferrer" className="text-school-yellow font-bold hover:text-white transition-colors flex items-center gap-2"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M5.5 2C5.03 2 4.63 2.19 4.3 2.53C3.96 2.86 3.79 3.29 3.79 3.79V20.21C3.79 20.71 3.96 21.14 4.3 21.47C4.63 21.81 5.03 22 5.5 22C5.69 22 5.87 21.96 6.04 21.88L18.42 14.8C18.8 14.58 19 14.28 19 13.9C19 13.52 18.8 13.22 18.42 13L6.04 5.92C5.87 5.84 5.69 5.8 5.5 5.8V2Z" /></svg> App Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-school-yellow mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Near PSO Pump, Bismillah Market</li>
              <li>MAI College Sar Suba Shah</li>
              <li>Opposite to UBL bank</li>
              <li className="pt-2">info@school.edu</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MAI School & College. All rights reserved.
        </div>
      </div>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
}
