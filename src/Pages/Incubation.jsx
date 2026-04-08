import React from 'react';
import { Bot, Building2, Dna, Building, Laptop, Microscope, Plug, Rocket, GraduationCap, Handshake, Coins, Brain, Mail, Phone } from 'lucide-react';

const Incubation = () => {
  const thrustAreas = [
    { title: 'Artificial Intelligence & IoT', icon: <Bot size={24} /> },
    { title: 'Sustainable Infrastructure & Environmental Technologies', icon: <Building2 size={24} /> },
    { title: 'Life Sciences & Bio-Innovation', icon: <Dna size={24} /> },
  ];

  const facilities = [
    { name: 'Office space at nominal rent', icon: <Building size={24} /> },
    { name: 'High-end systems with GPU support', icon: <Laptop size={24} /> },
    { name: 'AAHL NABL Accredited Lab', icon: <Microscope size={24} /> },
    { name: 'IoT Kits & Embedded Platforms', icon: <Plug size={24} /> },
  ];

  const sustainableFacilities = [
    'Concrete & Brick Testing',
    'Steel Tensile Testing',
    'Soil Field Density Testing',
    'Concrete Mix Design Analysis',
    'Brick Water Absorption & Efflorescence Testing',
    'Non-Destructive Concrete Testing (Rebound Hammer)',
  ];

  const supportProvided = [
    'Grant & Funding Assistance',
    'Expert Mentoring',
    'Patent & IPR Support',
    'Industry Collaboration',
  ];

  const stats = [
    { label: 'Startups Incubated', value: '136', icon: <Rocket size={24} /> },
    { label: 'Graduated Startups', value: '75', icon: <GraduationCap size={24} /> },
    { label: 'Partnerships', value: '127', icon: <Handshake size={24} /> },
    { label: 'Built-up Area', value: '1L Sq Ft', icon: <Building size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight uppercase">
            Startup Incubation Opportunity
          </h1>
          <p className="text-xl md:text-2xl font-medium italic text-blue-200 mb-8">
            Seed. Rise. Scale.
          </p>
          <div className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 transition-all cursor-pointer">
            Inviting Startups & Innovators
          </div>
        </div>
      </section>

      {/* MIIC Info Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-blue-900 mb-2">MIIC</h2>
          <p className="text-2xl font-bold text-gray-800 mb-1">MMES Incubation and Innovation Council (MIIC)</p>
          <p className="text-lg text-gray-600">C. Abdul Hakeem College of Engineering and Technology</p>
          <p className="text-md text-gray-500 italic">Melvisharam – Ranipet District</p>
        </div>
      </section>

      {/* Why Choose MIIC Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Dedicated Workspace', desc: 'Plug-and-play office space with high-speed internet & meeting rooms', icon: <Building size={24} /> },
              { label: 'Funding Access', desc: 'Guidance to secure grants from DST, MSME, and Seed Funds', icon: <Coins size={24} /> },
              { label: 'Expert Mentoring', desc: '1-on-1 guidance from industry veterans & faculty experts', icon: <Brain size={24} /> },
              { label: 'Lab Infrastructure', desc: 'GPU workstations, IoT kits, & NABL testing labs onsite', icon: <Microscope size={24} /> },
            ].map((highlight, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-blue-50/50 border border-blue-100 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all flex flex-col items-center">
                <div className="text-4xl mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">{highlight.icon}</div>
                <div className="text-lg font-black text-blue-900 mb-2 uppercase tracking-wide">{highlight.label}</div>
                <div className="text-sm font-medium text-gray-600 leading-relaxed">{highlight.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thrust Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-12">
            <span className="bg-blue-900 text-white p-3 rounded-lg mr-4">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </span>
            <h3 className="text-3xl font-bold text-gray-900 uppercase">Thrust Areas</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {thrustAreas.map((area, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:transform hover:-translate-y-2 transition-all">
                <div className="text-5xl mb-6">{area.icon}</div>
                <h4 className="text-xl font-bold text-blue-900 leading-tight">{area.title}</h4>
                <div className="mt-4 w-12 h-1 bg-blue-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Combined */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* General Facilities */}
            <div>
              <div className="flex items-center mb-8">
                <span className="bg-blue-900 text-white p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </span>
                <h3 className="text-3xl font-bold text-gray-900 uppercase">Facilities Available</h3>
              </div>
              <ul className="space-y-4">
                {facilities.map((f, idx) => (
                  <li key={idx} className="flex items-center text-lg text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:bg-blue-50 transition-colors">
                    <span className="text-2xl mr-4">{f.icon}</span>
                    <span className="font-medium">{f.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sustainable Infrastructure */}
            <div>
              <div className="flex items-center mb-8">
                <span className="bg-blue-900 text-white p-3 rounded-lg mr-4 text-sm font-bold">LAB</span>
                <h3 className="text-3xl font-bold text-gray-900 uppercase">Sustainable Infrastructure Facilities</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sustainableFacilities.map((f, idx) => (
                  <div key={idx} className="flex items-start bg-blue-50 p-4 rounded-lg border-l-4 border-blue-900">
                    <span className="text-blue-900 mr-2 font-bold font-mono">▸</span>
                    <span className="text-sm font-semibold text-gray-800">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Provided */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black uppercase mb-4">Support Provided</h3>
            <div className="h-1 w-24 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {supportProvided.map((s, idx) => (
              <div key={idx} className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700 text-center hover:bg-blue-800 transition-all">
                <div className="text-white mb-4">
                  <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="text-lg font-bold leading-snug">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <p className="text-2xl font-light italic text-blue-100 mb-8 font-serif">
              "Turn your ideas into impact with MIIC"
            </p>
            <p className="text-3xl font-black tracking-widest uppercase text-white/50">
              Seed. Rise. Scale.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-xl">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h4 className="text-2xl font-bold text-blue-900 mb-2">Connect with Us</h4>
              <p className="text-gray-600">Start your journey with MIIC today.</p>
            </div>
            <div className="grid gap-4 w-full md:w-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <a href="mailto:miic@cahcet.edu.in" className="flex items-center bg-white px-6 py-3 rounded-xl border border-gray-200 shadow-sm hover:border-blue-900 transition-colors">
                  <span className="mr-3"><Mail size={16} size={24} /></span>
                  <span className="text-sm font-semibold">miic@cahcet.edu.in</span>
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start bg-blue-900 text-white px-6 py-3 rounded-xl shadow-lg">
                <span className="mr-3"><Phone size={16} size={24} /></span>
                <span className="text-md font-bold">9789297572 | 9943295889</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Incubation;
