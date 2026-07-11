"use client";

import { useState } from "react";
import { submitAdmission } from "@/actions/supabase";
import { CheckCircle2, ChevronRight, ChevronLeft, UploadCloud } from "lucide-react";

export default function AdmissionsPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1
    studentName: "",
    dob: "",
    grade: "",
    customCourse: "",
    previousSchool: "",
    // Step 2
    fatherName: "",
    phone: "",
    email: "",
    address: "",
    // Step 3 (Mock URLs for now)
    photoUrl: "",
    birthCertificateUrl: "",
    reportCardUrl: "",
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    setIsSubmitting(true);
    try {
      await submitAdmission(formData);
      
      // Redirect to WhatsApp
      const whatsappNumber = "923315277499";
      const appliedFor = formData.grade === "Other Course" ? formData.customCourse : formData.grade;
      const message = `*New Admission Application* 🎓\n\n*Student Name:* ${formData.studentName}\n*Father Name:* ${formData.fatherName}\n*Applying For:* ${appliedFor}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n*Previous School:* ${formData.previousSchool || 'N/A'}`;
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl text-center border-t-8 border-school-yellow">
          <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-school-black mb-4">Application Received!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying. We have received your application and will contact you via email shortly.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-school-yellow text-school-black font-bold py-4 px-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-md"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-school-black mb-4">Online Admissions</h1>
          <p className="text-lg text-gray-600">Join our community of learners and leaders.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10 relative">
          <div className="flex justify-between items-center relative z-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 shadow-sm ${
                step >= i ? "bg-school-yellow text-school-black border-2 border-school-yellow" : "bg-white text-gray-400 border-2 border-gray-300"
              }`}>
                {i}
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-300 -z-10 -translate-y-1/2 rounded-full overflow-hidden">
            <div className="h-full bg-school-yellow rounded-full transition-all duration-300" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          
          {/* Step 1: Student Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-school-black mb-1">Step 1: Student Details</h2>
                <p className="text-gray-500 mb-6 text-sm">Focusing on the child's foundation.</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Student's Full Name *</label>
                <input required type="text" value={formData.studentName} onChange={e => updateForm("studentName", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
                  <input required type="date" value={formData.dob} onChange={e => updateForm("dob", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Class / Course Applying For *</label>
                  <select required value={formData.grade} onChange={e => updateForm("grade", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all bg-white mb-4">
                    <option value="">Select Program</option>
                    <optgroup label="Academic Classes">
                      <option value="Play Group">Play Group</option>
                      <option value="Nursery">Nursery</option>
                      <option value="Prep">Prep</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="FA">FA</option>
                      <option value="FSc">FSc</option>
                      <option value="ICS">ICS</option>
                      <option value="I.Com">I.Com</option>
                    </optgroup>
                    <optgroup label="Professional Courses">
                      <option value="IELTS Preparation">IELTS Preparation</option>
                      <option value="IELTS Life Skills">IELTS Life Skills</option>
                      <option value="Spoken English">Spoken English</option>
                      <option value="Computer Courses">Computer Courses</option>
                      <option value="A1 Language Cert">A1 Language Cert</option>
                      <option value="Other Course">Other Course (Type below)</option>
                    </optgroup>
                  </select>
                  {formData.grade === "Other Course" && (
                    <div className="mt-2 animate-in fade-in slide-in-from-top-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Please specify the course *</label>
                      <input required type="text" placeholder="e.g. Graphic Design" value={formData.customCourse} onChange={e => updateForm("customCourse", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all" />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Previous School Attended (Optional)</label>
                <input type="text" value={formData.previousSchool} onChange={e => updateForm("previousSchool", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all" />
              </div>
            </div>
          )}

          {/* Step 2: Parent/Guardian Information */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-school-black mb-1">Step 2: Parent/Guardian Info</h2>
                <p className="text-gray-500 mb-6 text-sm">Essential contact routing details.</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Father/Guardian Name *</label>
                <input required type="text" value={formData.fatherName} onChange={e => updateForm("fatherName", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Phone Number *</label>
                  <input required type="tel" value={formData.phone} onChange={e => updateForm("phone", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address (Optional)</label>
                  <input type="email" value={formData.email} onChange={e => updateForm("email", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Home Address *</label>
                <textarea required rows={3} value={formData.address} onChange={e => updateForm("address", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-school-black mb-1">Step 3: Review & Submit</h2>
                <p className="text-gray-500 mb-6 text-sm">Please verify your information before submitting.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-200 pb-4">
                  <div>
                    <div className="text-sm text-gray-500">Student Name</div>
                    <div className="font-medium text-school-black">{formData.studentName || "-"}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Date of Birth</div>
                    <div className="font-medium text-school-black">{formData.dob || "-"}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Applying For</div>
                    <div className="font-medium text-school-black">
                      {formData.grade === "Other Course" ? formData.customCourse || "Other Course" : (formData.grade || "-")}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Previous School</div>
                    <div className="font-medium text-school-black">{formData.previousSchool || "-"}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Parent/Guardian Name</div>
                    <div className="font-medium text-school-black">{formData.fatherName || "-"}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Contact Number</div>
                    <div className="font-medium text-school-black">{formData.phone || "-"}</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm text-gray-500">Email Address</div>
                    <div className="font-medium text-school-black">{formData.email || "-"}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start mt-6 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                <input required type="checkbox" id="confirm" className="mt-1 w-5 h-5 text-school-yellow border-gray-300 rounded focus:ring-school-yellow" />
                <label htmlFor="confirm" className="ml-3 text-sm text-gray-800">
                  I confirm that the information provided is accurate and complete to the best of my knowledge.
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-10 flex justify-between items-center pt-6 border-t border-gray-100">
            {step > 1 ? (
              <button 
                type="button" 
                onClick={() => setStep(step - 1)}
                className="flex items-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-2" /> Back
              </button>
            ) : <div></div>}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`flex items-center px-8 py-3 rounded-xl font-bold transition-all shadow-md ${
                step === 3 
                  ? "bg-school-yellow text-school-black hover:bg-yellow-400 w-full md:w-auto text-lg py-4" 
                  : "bg-school-black text-white hover:bg-gray-800"
              }`}
            >
              {isSubmitting ? "Processing..." : step === 3 ? "Submit Application" : (
                <>Next Step <ChevronRight className="w-5 h-5 ml-2" /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
