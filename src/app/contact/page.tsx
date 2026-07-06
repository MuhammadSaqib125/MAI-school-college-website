"use client";

import { useState } from "react";
import { submitComplaint } from "@/actions/supabase";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    type: "General Inquiry",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitComplaint(formData);
      setSuccess(true);
      setFormData({ name: "", contactInfo: "", type: "General Inquiry", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Failed to submit message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-school-white min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-school-black mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-school-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-school-yellow">
            <h2 className="text-3xl font-bold text-school-black mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-school-yellow/20 p-4 rounded-xl shrink-0 group-hover:bg-school-yellow transition-colors">
                  <MapPin className="text-school-black w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-school-black mb-1">Our Location</h3>
                  <p className="text-gray-600">Near PSO Pump, Bismillah Market<br />MAI College Sar Suba Shah<br />Opposite to UBL bank</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-school-yellow/20 p-4 rounded-xl shrink-0 group-hover:bg-school-yellow transition-colors">
                  <Phone className="text-school-black w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-school-black mb-1">Phone Number</h3>
                  <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-school-yellow/20 p-4 rounded-xl shrink-0 group-hover:bg-school-yellow transition-colors">
                  <Mail className="text-school-black w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-school-black mb-1">Email Address</h3>
                  <p className="text-gray-600">info@school.edu<br />admissions@school.edu</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-gray-100 p-4 rounded-xl shrink-0 group-hover:bg-school-black group-hover:text-school-yellow transition-colors text-gray-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-school-black mb-1">Office Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 4:00 PM<br />Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-school-yellow"></div>
            <h2 className="text-3xl font-bold text-school-black mb-2">Message / Complaint Desk</h2>
            <p className="text-gray-500 mb-8">Let us know how we can help or if you have any concerns.</p>
            
            {success && (
              <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 flex items-center">
                <div className="mr-3 bg-green-100 p-1 rounded-full"><Send size={16} /></div>
                Your message has been sent successfully. We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email or Phone Number *</label>
                <input required type="text" value={formData.contactInfo} onChange={e => setFormData({...formData, contactInfo: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry / Complaint Type *</label>
                <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all bg-white">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Academic">Academic</option>
                  <option value="Administrative">Administrative</option>
                  <option value="Transport">Transport</option>
                  <option value="Facilities">Facilities</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-school-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-md disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
