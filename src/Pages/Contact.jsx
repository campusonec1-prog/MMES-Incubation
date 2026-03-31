import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-blue-900 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Contact Us</h1>
        <p className="text-blue-100 max-w-xl mx-auto px-4">
          Have a question or want to collaborate? Reach out to the MIIC team.
        </p>
      </section>

      <div className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-900">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Support</h4>
                  <p className="text-gray-500 mb-2">Technical & Administrative Inquiries:</p>
                  <a href="mailto:miic@cahcet.edu.in" className="text-blue-700 font-semibold hover:underline block mb-1">miic@cahcet.edu.in</a>
                  <a href="mailto:muzaffar.it@cahcet.edu.in" className="text-blue-700 font-semibold hover:underline block mb-1">muzaffar.it@cahcet.edu.in</a>
                  <a href="mailto:hashimba.ece@cahcet.edu.in" className="text-blue-700 font-semibold hover:underline block">hashimba.ece@cahcet.edu.in</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-900">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-500 mb-2">Available Mon-Sat: 9:00 AM - 5:00 PM</p>
                  <p className="text-blue-900 font-black text-lg">+91 9789297572 | 9943295889</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Visit Our Hub</h4>
                  <p className="text-gray-500 leading-relaxed">
                    C. Abdul Hakeem College of Engineering & Technology,<br />
                    Melvisharam – 632 509, Ranipet District,<br />
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase">Send a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full bg-white p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                <input type="text" placeholder="Last Name" className="w-full bg-white p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
              </div>
              <input type="email" placeholder="Your Email Address" className="w-full bg-white p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
              <textarea placeholder="Tell us about your startup or inquiry..." rows="6" className="w-full bg-white p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"></textarea>
              <button type="submit" className="w-full bg-blue-900 text-white py-5 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
