import { Microscope, Monitor, Trophy, Presentation } from "lucide-react";

export default function FacilitiesPage() {
  return (
    <div className="bg-school-white min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-school-black mb-4">Our Facilities</h1>
          <div className="w-24 h-1 bg-school-yellow mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            At MAI School & College, we believe in providing a world-class environment that inspires our students to achieve greatness both inside and outside the classroom.
          </p>
        </div>

        <div className="space-y-16">
          {/* Science Lab */}
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-3xl shadow-lg border-l-8 border-school-yellow">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-school-gray/5 p-12 rounded-full">
                <Microscope className="w-32 h-32 text-school-black" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-school-black mb-4">Science Laboratory</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our cutting-edge science labs are equipped with the latest apparatus and safety features, providing students with hands-on experience in physics, chemistry, and biology. We encourage inquiry-based learning and experimentation under the careful guidance of our expert faculty.
              </p>
            </div>
          </div>

          {/* Computer Lab */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white p-8 rounded-3xl shadow-lg border-r-8 border-school-yellow">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-school-gray/5 p-12 rounded-full">
                <Monitor className="w-32 h-32 text-school-black" />
              </div>
            </div>
            <div className="md:w-2/3 text-left md:text-right">
              <h2 className="text-3xl font-bold text-school-black mb-4">Computer Lab</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In today's digital age, technological literacy is paramount. Our modern computer labs feature high-speed internet, updated software, and individual workstations designed to teach coding, design, and digital literacy.
              </p>
            </div>
          </div>

          {/* Sport Facilities */}
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-3xl shadow-lg border-l-8 border-school-yellow">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-school-gray/5 p-12 rounded-full">
                <Trophy className="w-32 h-32 text-school-black" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-school-black mb-4">Sport Facilities</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Physical education is a core part of our curriculum. We boast expansive sports grounds, indoor courts, and dedicated coaching staff to help students excel in cricket, football, basketball, athletics, and more.
              </p>
            </div>
          </div>

          {/* Digital Classrooms */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white p-8 rounded-3xl shadow-lg border-r-8 border-school-yellow">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-school-gray/5 p-12 rounded-full">
                <Presentation className="w-32 h-32 text-school-black" />
              </div>
            </div>
            <div className="md:w-2/3 text-left md:text-right">
              <h2 className="text-3xl font-bold text-school-black mb-4">Digital Classrooms</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Learning goes beyond traditional methods. Our digital classrooms provide a modern, tech-integrated environment with specialized learning software to make lessons highly interactive and engaging for all students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
