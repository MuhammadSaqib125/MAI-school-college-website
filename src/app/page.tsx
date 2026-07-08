import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents } from "@/actions/supabase";
import { Calendar, Users, Award, Clock, Microscope, Monitor, Trophy, Presentation, ShieldCheck, CheckCircle, Globe, Mic, Laptop, Compass, BookOpen } from "lucide-react";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const events = await getUpcomingEvents();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black/60"></div>
        {/* Hero Image */}
        <div className="absolute inset-0 z-[-1]">
          <Image 
            src="/images/ChatGPT Image Jul 5, 2026, 03_33_01 PM.png" 
            alt="School Campus" 
            fill 
            className="object-cover" 
            priority 
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Empowering the Next Generation
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 drop-shadow-md">
            Discover a world of opportunities where academic excellence meets holistic development.
          </p>
          <Link 
            href="/admissions" 
            className="inline-block bg-school-yellow text-school-black font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* At a Glance Section */}
      <section className="py-20 bg-school-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-school-black mb-4">School at a Glance</h2>
            <div className="w-24 h-1 bg-school-yellow mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-b-4 border-school-yellow hover:-translate-y-2 transition-transform duration-300">
              <ShieldCheck className="w-12 h-12 text-school-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-school-black mb-2 mt-2">Affiliated With</h3>
              <p className="text-school-gray font-bold text-lg">BISE RWP</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-b-4 border-school-yellow hover:-translate-y-2 transition-transform duration-300">
              <CheckCircle className="w-12 h-12 text-school-yellow mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-school-black mb-2">100%</h3>
              <p className="text-school-gray font-medium">Acceptance</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-b-4 border-school-yellow hover:-translate-y-2 transition-transform duration-300">
              <Clock className="w-12 h-12 text-school-yellow mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-school-black mb-2">2020</h3>
              <p className="text-school-gray font-medium">Established Since</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-b-4 border-school-yellow hover:-translate-y-2 transition-transform duration-300">
              <Calendar className="w-12 h-12 text-school-yellow mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-school-black mb-2">40+</h3>
              <p className="text-school-gray font-medium">Extracurriculars</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations & Leadership Section */}
      <section className="py-16 bg-school-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Leadership Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-school-yellow mb-2">Leadership & Vision</h2>
              <div className="w-20 h-1 bg-white mb-6"></div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Under the dedicated leadership of our Principal, <span className="text-white font-bold text-xl block mt-2 mb-2">Wajiha Naveed Chaudhary</span> MAI School & College has rapidly grown since its establishment in 2020. Our mission is to provide an uncompromising standard of education and foster the leaders of tomorrow.
              </p>
            </div>

            {/* Accreditations Info */}
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-school-yellow" /> Official Accreditations
              </h3>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-school-yellow shrink-0 mt-0.5" />
                  <span><strong>Approved from:</strong> Education Department Govt of Punjab</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-school-yellow shrink-0 mt-0.5" />
                  <span><strong>Affiliation:</strong> Rawalpindi Board (BISE RWP)</span>
                </li>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
                  <div>
                    <span className="block text-xs text-school-yellow uppercase tracking-wider font-bold mb-1">EMIS Code</span>
                    <span className="text-xl font-mono text-white">373722350</span>
                  </div>
                  <div>
                    <span className="block text-xs text-school-yellow uppercase tracking-wider font-bold mb-1">Matric Level Code</span>
                    <span className="text-xl font-mono text-white">107199</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="block text-xs text-school-yellow uppercase tracking-wider font-bold mb-1">Intermediate Level Code</span>
                    <span className="text-xl font-mono text-white">207775</span>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-school-black mb-4">Our Premium Facilities</h2>
            <div className="w-24 h-1 bg-school-yellow mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">State-of-the-art infrastructure designed to provide an unparalleled learning experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Science Lab */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-school-yellow/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Microscope className="w-10 h-10 text-school-black" />
              </div>
              <h3 className="text-xl font-bold text-school-black mb-3">Science Lab</h3>
              <p className="text-gray-500 text-sm">Fully equipped modern laboratories for physics, chemistry, and biology experiments.</p>
            </div>
            {/* Computer Lab */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-school-yellow/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-10 h-10 text-school-black" />
              </div>
              <h3 className="text-xl font-bold text-school-black mb-3">Computer Lab</h3>
              <p className="text-gray-500 text-sm">High-speed internet and the latest computers to keep students ahead in technology.</p>
            </div>
            {/* Sport Facilities */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-school-yellow/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-10 h-10 text-school-black" />
              </div>
              <h3 className="text-xl font-bold text-school-black mb-3">Sport Facilities</h3>
              <p className="text-gray-500 text-sm">Expansive grounds and indoor courts to foster physical fitness and teamwork.</p>
            </div>
            {/* Digital Classrooms */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-school-yellow/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Presentation className="w-10 h-10 text-school-black" />
              </div>
              <h3 className="text-xl font-bold text-school-black mb-3">Digital Classrooms</h3>
              <p className="text-gray-500 text-sm">Modern tech-integrated learning environments that foster interactive education and digital literacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Courses Section */}
      <section className="py-20 bg-school-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-school-black mb-4">Professional Courses</h2>
            <div className="w-24 h-1 bg-school-yellow mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">We offer specialized programs to elevate your career and personal growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-school-yellow hover:-translate-y-2 transition-transform duration-300">
              <Globe className="w-10 h-10 text-school-yellow mb-4" />
              <h3 className="text-2xl font-bold text-school-black mb-2">IELTS Preparation</h3>
              <p className="text-gray-600">Comprehensive training to help you achieve your desired band score for study or work abroad.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-school-yellow hover:-translate-y-2 transition-transform duration-300">
              <Mic className="w-10 h-10 text-school-yellow mb-4" />
              <h3 className="text-2xl font-bold text-school-black mb-2">Spoken English</h3>
              <p className="text-gray-600">Build confidence and fluency in English communication with interactive speaking sessions.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-school-yellow hover:-translate-y-2 transition-transform duration-300">
              <Laptop className="w-10 h-10 text-school-yellow mb-4" />
              <h3 className="text-2xl font-bold text-school-black mb-2">Computer Courses</h3>
              <p className="text-gray-600">From basic IT skills to advanced programming, tailored for modern digital requirements.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-school-yellow hover:-translate-y-2 transition-transform duration-300">
              <Award className="w-10 h-10 text-school-yellow mb-4" />
              <h3 className="text-2xl font-bold text-school-black mb-2">A1 Language Cert</h3>
              <p className="text-gray-600">Official preparatory classes for A1 certification, ensuring strong foundational language skills.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-school-yellow hover:-translate-y-2 transition-transform duration-300">
              <Compass className="w-10 h-10 text-school-yellow mb-4" />
              <h3 className="text-2xl font-bold text-school-black mb-2">IELTS Life Skills</h3>
              <p className="text-gray-600">Specialized preparation for the IELTS Life Skills test, focusing on essential speaking and listening skills.</p>
            </div>
            
            <div className="bg-school-black p-8 rounded-2xl shadow-lg text-white flex flex-col justify-center items-center text-center hover:bg-gray-800 transition-colors duration-300 border-l-4 border-school-yellow">
              <BookOpen className="w-10 h-10 text-school-yellow mb-4" />
              <h3 className="text-2xl font-bold text-school-yellow mb-2">And Much More...</h3>
              <p className="text-gray-300">Contact us to explore our full range of professional certifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portals & App Section */}
      <section className="py-20 bg-school-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-school-black mb-4">Connect With Our Portals</h2>
            <div className="w-24 h-1 bg-school-black mx-auto"></div>
            <p className="mt-4 text-school-black/80 max-w-2xl mx-auto text-lg font-medium">Stay updated and track progress with our dedicated platforms for students and parents.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Student Portal */}
            <div className="bg-school-black text-white p-10 rounded-3xl shadow-xl flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-2xl font-bold text-school-yellow mb-4">Student Portal</h3>
              <ul className="space-y-3 mb-8 text-gray-300 flex-grow text-lg">
                <li className="flex items-center"><span className="text-school-yellow mr-3 font-bold">✓</span> Access Homework & Assignments</li>
                <li className="flex items-center"><span className="text-school-yellow mr-3 font-bold">✓</span> View Grades & Results</li>
                <li className="flex items-center"><span className="text-school-yellow mr-3 font-bold">✓</span> Nites AI Chat Assistant</li>
                <li className="flex items-center"><span className="text-school-yellow mr-3 font-bold">✓</span> Track Daily Attendance</li>
              </ul>
            </div>
            
            {/* Parent Portal */}
            <div className="bg-white text-school-black p-10 rounded-3xl shadow-xl flex flex-col hover:-translate-y-2 transition-transform border-4 border-school-black">
              <h3 className="text-2xl font-bold text-school-black mb-4">Parent Portal</h3>
              <ul className="space-y-3 mb-8 text-gray-600 flex-grow text-lg">
                <li className="flex items-center"><span className="text-school-black mr-3 font-bold">✓</span> Monitor Child's Grades</li>
                <li className="flex items-center"><span className="text-school-black mr-3 font-bold">✓</span> Track Attendance & Homework</li>
                <li className="flex items-center"><span className="text-school-black mr-3 font-bold">✓</span> Online Fee Management</li>
                <li className="flex items-center"><span className="text-school-black mr-3 font-bold">✓</span> Direct Communication with Teachers</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl border-2 border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-school-yellow/10 rounded-bl-full -z-10"></div>
            <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left z-10">
              <h3 className="text-3xl font-extrabold text-school-black mb-2">Download the Official App</h3>
              <p className="text-gray-600 text-lg">Get instant access to both Student and Parent portals on the go!</p>
            </div>
            <a 
              href="https://play.google.com/store/apps/details?id=com.nitesstudios.schoolhub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-school-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors shrink-0 shadow-lg z-10 hover:scale-105"
            >
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.5 2C5.03 2 4.63 2.19 4.3 2.53C3.96 2.86 3.79 3.29 3.79 3.79V20.21C3.79 20.71 3.96 21.14 4.3 21.47C4.63 21.81 5.03 22 5.5 22C5.69 22 5.87 21.96 6.04 21.88L18.42 14.8C18.8 14.58 19 14.28 19 13.9C19 13.52 18.8 13.22 18.42 13L6.04 5.92C5.87 5.84 5.69 5.8 5.5 5.8V2Z" /></svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-gray-300 font-semibold">Get it on</span>
                <span className="text-lg font-bold leading-none mt-0.5">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-school-gray/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-school-black mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-school-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events && events.length > 0 ? (
              events.map((event: any) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    {/* Placeholder for event image */}
                    {event.image_url ? (
                      <Image src={event.image_url} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                        No Image
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-school-yellow text-school-black font-bold px-3 py-1 rounded-full text-sm shadow-md">
                      {new Date(event.event_date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-school-black mb-2 group-hover:text-school-yellow transition-colors">{event.title}</h3>
                    <p className="text-gray-600 line-clamp-3">{event.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500 italic py-10 bg-white rounded-xl shadow-sm border border-gray-100">
                No upcoming events at the moment.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
