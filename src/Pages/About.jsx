import { Flame, Handshake, Target, Leaf, Landmark, MapPin, GraduationCap, Rocket, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  { year: '2024', title: 'MIIC Established', desc: 'The MMES Incubation and Innovation Council was formally constituted at C. Abdul Hakeem College of Engineering and Technology, Melvisharam.' },
  { year: '2024', title: 'Infrastructure Setup', desc: 'State-of-the-art incubation space, GPU lab, IoT platforms, and NABL-accredited labs were provisioned for resident startups.' },
  { year: '2025', title: 'Expanding Reach', desc: 'Plans underway to establish satellite hubs in Chennai to widen the startup support network.' },
];

const team = [
  { name: 'Dr Mohammed Muzaffar Hussain', role: 'Dean (Acadmic and Administration)', dept: 'Dept. of Information Technology', email: 'muzaffar.it@cahcet.edu.in' },
  { name: 'Mr. Hashim B A', role: 'Dean (Research and Innovation)', dept: 'Dept. of Electronics & Communication Engineering', email: 'hashimba.ece@cahcet.edu.in' },
  { name: 'Dr. R.Z. Inamul Hussain', role: 'Innovation Coordinator', dept: 'Associate Professor/CSE', email: '' },
  { name: 'Dr. Y.J. Nazeer Ahmed', role: 'Startup Coordinator', dept: 'Associate Professor/ECE', email: '' },
];

const values = [
  { icon: <Flame size={32} />, title: 'Innovation First', desc: 'We believe every problem has an innovative solution. We exist to help you find and build it.' },
  { icon: <Handshake size={32} />, title: 'Collaborative Growth', desc: 'We connect startups with mentors, industry, and institutions for shared success.' },
  { icon: <Target size={32} />, title: 'Impact Driven', desc: 'We measure success by the social, economic, and technological impact our startups create.' },
  { icon: <Leaf size={32} />, title: 'Inclusive Ecosystem', desc: 'Open to students, faculty, and entrepreneurs — from any background, any stage.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO */}
      <section
        className="py-24 px-6 text-white text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)' }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
            C. Abdul Hakeem College of Engineering & Technology
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            About <span className="text-blue-300">MIIC</span>
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            The <strong className="text-white">MMES Incubation and Innovation Council (MIIC)</strong> is the official startup incubation and innovation hub of C. Abdul Hakeem College of Engineering and Technology, Melvisharam. We are dedicated to transforming ideas into impactful ventures — <em>Seed. Rise. Scale.</em>
          </p>
        </div>
        {/* Decorative circle */}
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              MIIC is an institutional incubation centre established under the MMES Trust umbrella, with the mission to foster entrepreneurial culture among students, faculty, and aspiring entrepreneurs in the region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              We provide the infrastructure, mentoring, funding guidance, and industry connections necessary to transform nascent ideas into scalable, market-ready products and businesses.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our focus areas span <strong>Artificial Intelligence & IoT</strong>, <strong>Life Sciences & Bio-Innovation</strong>, <strong>Sustainable Infrastructure</strong> technologies that will define the next decade.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: <Landmark size={24} />, label: 'Established', value: '' },
              { icon: <MapPin size={24} />, label: 'Location', value: 'Melvisharam, Tamil Nadu' },
              { icon: <GraduationCap size={24} />, label: 'Host Institution', value: 'CAHCET' },
              { icon: <Rocket size={24} />, label: 'Stage', value: 'Launching' },
            ].map(item => (
              <div key={item.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{item.label}</div>
                <div className="font-black text-gray-900 text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl p-10 text-white" style={{ background: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)' }}>
              <div className="text-4xl mb-5"><Target size={32} size={24} /></div>
              <h3 className="text-2xl font-black mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To create an inclusive, resource-rich innovation ecosystem that empowers students, faculty, and entrepreneurs to ideate, incubate, and launch technology-based ventures — driven by societal need and guided by industry mentorship.
              </p>
            </div>
            <div className="rounded-3xl p-10 text-white" style={{ background: 'linear-gradient(135deg, #7f1d1d, #b91c1c)' }}>
              <div className="text-4xl mb-5"><Star size={32} size={24} /></div>
              <h3 className="text-2xl font-black mb-4">Our Vision</h3>
              <p className="text-red-100 leading-relaxed">
                To become the foremost startup incubation hub in Tamil Nadu — nurturing industry-ready innovators who can build scalable, impactful ventures that contribute to national and global progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-14">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h4 className="font-black text-gray-900 mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-14">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-blue-100" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center text-white font-black text-xs z-10">
                    {m.year}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 flex-1 border border-gray-100 hover:shadow-md transition-shadow">
                    <h4 className="font-black text-gray-900 mb-2">{m.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-14">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {team.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-20 h-20 rounded-full bg-blue-900 flex items-center justify-center text-white text-3xl font-black mx-auto mb-5">
                  {t.name.split(' ').pop()[0]}
                </div>
                <h4 className="font-black text-gray-900 text-lg mb-1">{t.name}</h4>
                <p className="text-blue-700 font-bold text-sm mb-1">{t.role}</p>
                <p className="text-gray-400 text-xs mb-4">{t.dept}</p>
                {t.email && <a href={`mailto:${t.email}`} className="text-blue-600 text-xs hover:underline break-all">{t.email}</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white text-center" style={{ background: 'linear-gradient(to right, #dc2626, #991b1b)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-4 uppercase">Be Part of the Journey</h2>
          <p className="text-red-100 mb-10">
            Whether you're a startup, student innovator, or industry mentor — MIIC has a place for you.
          </p>
          <Link
            to="/incubation"
            className="inline-block bg-white text-red-700 font-black px-10 py-4 rounded-full text-lg hover:bg-red-50 transition-colors shadow-2xl"
          >
            Apply for Incubation →
          </Link>
        </div>
      </section>

    </div>
  );
}
