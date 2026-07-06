import Image from "next/image";

export default function AboutPage() {
  const galleryImages = [
    { src: "/images/IMG-20260705-WA0014.jpg", alt: "Campus view" },
    { src: "/images/IMG-20260705-WA0015.jpg", alt: "Students in class" },
    { src: "/images/IMG-20260705-WA0016.jpg", alt: "School events" },
    { src: "/images/IMG-20260705-WA0018.jpg", alt: "Library" },
    { src: "/images/IMG-20260705-WA0019.jpg", alt: "Art and culture" },
    { src: "/images/IMG-20260705-WA0020.jpg", alt: "Sports" },
    { src: "/images/IMG-20260705-WA0021.jpg", alt: "Auditorium" },
    { src: "/images/IMG-20260705-WA0024.jpg", alt: "Campus building" },
    { src: "/images/IMG-20260705-WA0025.jpg", alt: "Learning" },
    { src: "/images/IMG-20260705-WA0026.jpg", alt: "Graduation" },
  ];

  return (
    <div className="bg-school-white min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-school-black mb-4">About Us</h1>
          <div className="w-24 h-1 bg-school-yellow mx-auto"></div>
        </div>

        {/* Principal's Message & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-school-black">Principal's Message</h2>
            <div className="w-16 h-1 bg-school-yellow"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              "Welcome to a community where curiosity meets discipline and passion meets purpose. 
              Our goal has always been to foster an environment where every student is encouraged 
              to discover their unique potential. We believe in holistic education that goes beyond 
              textbooks, preparing our students for the real challenges of the future."
            </p>
            <p className="font-bold text-school-black text-xl">- Dr. Sarah Jenkins, Principal</p>
          </div>
          <div className="bg-school-black text-white p-10 rounded-3xl shadow-xl flex flex-col justify-center border-b-8 border-school-yellow">
            <h2 className="text-3xl font-bold text-school-yellow mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Mission:</strong> To provide a dynamic and inclusive learning environment that empowers students to achieve academic excellence and develop essential life skills.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-white">Vision:</strong> To be a globally recognized institution that nurtures ethical leaders, innovative thinkers, and responsible global citizens.
            </p>
          </div>
        </div>

        {/* Masonry Photo Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-school-black mb-4 text-center">Life on Campus</h2>
          <div className="w-16 h-1 bg-school-yellow mx-auto mb-10"></div>
          
          <div className="masonry-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="masonry-item rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-200">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
