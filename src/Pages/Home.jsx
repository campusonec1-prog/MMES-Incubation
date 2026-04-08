import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import img1 from '../Images/1.png';
import img2 from '../Images/2.png';
import img3 from '../Images/3.png';
import aahlMain from '../Images/Labs/AAHL facility.jpeg';
import { Link } from 'react-router-dom';
import {
  Rocket,
  GraduationCap,
  Handshake,
  Building,
  Briefcase,
  TrendingUp,
  Coins,
  Receipt,
  Laptop,
  Plug,
  Microscope,
  FlaskConical,
  Brain,
  Scroll,
  User,
  Users,
  Mail,
  Phone,
  Search,
  FileText,
  Radio,
  Scale,
  Factory,
  Lightbulb,
  Landmark,
  ShieldAlert
} from 'lucide-react';


/* ─── DATA ─────────────────────────────────────────────── */
const slides = [
  {
    id: 1,
    campus: 'MELVISHARAM CAMPUS',
    tagline: 'MIIC now incubates startups at C. Abdul Hakeem College of Engineering & Technology, Melvisharam – Ranipet District.',
    image: img1,
    gradient: 'linear-gradient(to right, #1e3a8a, #1d4ed8)',
    label: 'OFFICE HUB',
    sublabel: '| SEED | RISE | SCALE |',
  },
  {
    id: 2,
    campus: 'WELCOME TO MIIC',
    tagline: 'An inclusive innovation ecosystem empowering students, faculty, and entrepreneurs to transform ideas into impactful ventures.',
    image: img2,
    gradient: 'linear-gradient(to right, #991b1b, #dc2626)',
    label: 'INNOVATION ECOSYSTEM',
    sublabel: '| SEED | RISE | SCALE |',
  },
  {
    id: 3,
    campus: 'INTEGRATED INNOVATION',
    tagline: 'Pioneering breakthroughs at the intersection of Industry 4.0, Life Sciences, Digital Diagnostics, and Computational Biology.',
    image: img3,
    gradient: 'linear-gradient(to right, #312e81, #4338ca)',
    label: 'THRUST AREAS',
    sublabel: '| SEED | RISE | SCALE |',
  },
];

const ciicImpact = [
  { label: 'Startups Incubated', value: '136', icon: <Rocket size={32} /> },
  { label: 'Graduated Startups', value: '75', icon: <GraduationCap size={32} /> },
  { label: 'Partnerships', value: '127', icon: <Handshake size={32} /> },
  { label: 'Built-up Area', value: '1L Sq Ft', icon: <Building size={32} /> },
];

const startupImpact = [
  { label: 'Jobs Created', value: '2435', icon: <Briefcase size={32} /> },
  { label: 'Startups Valuation', value: '₹3161 Cr', icon: <TrendingUp size={32} /> },
  { label: 'Sales Turnover', value: '₹828 Cr', icon: <Coins size={32} /> },
  { label: 'Fund Raised', value: '₹478 Cr', icon: <Receipt size={32} /> },
];

const thrustAreas = [
  {
    title: 'Artificial Intelligence & IoT Applications',
    items: 'AI | ML | AR/VR | Cloud Computing | Automation | Simulation Integration | BIG Data | Cyber Security | Robotics | IoT Applications',
  },
  {
    title: 'Sustainable Infrastructure & Environmental Technologies',
    items: 'Sustainable Infrastructure | Environmental Technologies | Green Building | Waste Management | Renewable Energy | Water Conservation',
  },
  {
    title: 'Life Sciences & Bio-Innovation',
    items: 'Bio-Pharma | Bio-Energy | Bio-Services | Bio-Industry | Med-Tech | Agri-Tech | Life Sciences',
  },
];

const iprStats = [
  { label: 'Granted', value: '27', category: 'University' },
  { label: 'Published', value: '51', category: 'University' },
  { label: 'Filed', value: '48', category: 'University' },
  { label: 'Copyrights', value: '2', category: '' },
  { label: 'Design', value: '2', category: '' },
  { label: 'TM', value: '2', category: '' },
];

const partners = [
  '7G', 'KEIRETSU FORUM', 'Circle of Angels', 'CAPITAL-A', 'IIN4', 'iPV',
  'July Ventures', '100X', 'ANICUT', 'IN4', 'BlueHill Capital',
  'EAF', 'Sathguru Catalysers', 'The Chennai Angels', 'Seafund',
  'IVCA', 'Connect2Investors', 'MudhalVC', 'Java Capital', 'beej network',
  'N W.O.M.E.N', 'Indian Angel Network', 'Peaceful Progress',
];

/* ─── ANIMATED COUNTER ──────────────────────────────────── */
function AnimatedCounter({ target, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observed = useRef(false);

  // strip non-numeric prefix
  const numeric = parseInt(target.replace(/[^0-9]/g, '')) || 0;
  const prefix = target.replace(/[0-9,]+.*/, '');
  const suffix = target.replace(/^[^0-9]*[0-9,]+/, '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        let start = 0;
        const step = numeric / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= numeric) { setCount(numeric); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [numeric, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

/* ─── HERO SLIDER ───────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (idx) => {
    if (transitioning || idx === current) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(idx); setTransitioning(false); }, 400);
  };
  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [current]);

  const s = slides[current];

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '420px' }}>
      {/* Background Image or Gradient */}
      <div
        className="absolute inset-0 transition-all duration-700 bg-cover bg-center"
        style={s.image ? { backgroundImage: `url(${s.image})` } : { background: s.gradient }}
      />

      {/* Very subtle gradient just behind the text for readability, leaving the rest of the image clear */}
      {s.image && <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent transition-all duration-700" />}

      {/* Content */}
      <div
        className="absolute inset-0 flex items-center px-8 md:px-20"
        style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.4s ease' }}
      >
        <div className="max-w-xl text-white z-10 drop-shadow-lg">
          <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-4 tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            {s.campus}
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-sm leading-relaxed font-medium" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>
            {s.tagline}
          </p>
          <div className="inline-flex flex-col items-start bg-black/30 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-xl">
            <span className="text-white font-bold text-lg">MIIC</span>
            <span className="font-bold text-white/90 text-sm">{s.label}</span>
            <span className="text-white/70 text-xs mt-1">{s.sublabel}</span>
          </div>
        </div>

        {/* Decorative right panel */}
        <div className="hidden md:flex flex-col items-end ml-auto z-10">
          <div className="w-64 h-64 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <span className="text-7xl font-black text-white/30">MIIC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nav buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all"
      >‹</button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-400 text-white flex items-center justify-center transition-all"
      >›</button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i} onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── STAT CARD ─────────────────────────────────────────── */
function StatCard({ icon, value, label, accent = false }) {
  return (
    <div className={`flex flex-col items-center p-6 rounded-2xl transition-all hover:scale-105 ${accent ? 'bg-red-50' : 'bg-white'}`}>
      <span className="text-4xl mb-2">{icon}</span>
      <span className="text-3xl md:text-4xl font-black text-gray-900">
        <AnimatedCounter target={value} />
      </span>
      <span className="text-sm text-gray-500 mt-1 font-medium text-center">{label}</span>
    </div>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* FACILITIES AVAILABLE */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">Facilities Available</h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            MIIC provides state-of-the-art infrastructure for startups and innovators at CAHCET, Melvisharam.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <Building size={32} />, text: 'Office space at nominal rent' },
                { icon: <Laptop size={32} />, text: 'High-performance computing systems with GPU support' },
                { icon: <Plug size={32} />, text: 'IoT development kits and embedded systems platforms' },
                { icon: <Microscope size={32} />, text: 'Access to Aquatic Animal Health Laboratory (NABL-accredited) for testing' },
                { icon: <FlaskConical size={32} />, text: 'Laboratory access based on project requirements' },
              ].map(f => (
                <motion.div key={f.text} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl shrink-0 text-blue-900">{f.icon}</span>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{f.text}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl h-full min-h-[300px]"
            >
              <img src={aahlMain} alt="AAHL Facility" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="font-black text-xl mb-2">Explore Labs</h4>
                <p className="text-blue-100 text-sm mb-4">View our NABL accredited facilities and research centers.</p>
                <Link to="/facilities" className="inline-block bg-white text-blue-900 font-black px-6 py-2 rounded-full text-sm hover:bg-blue-50 transition-colors">
                  View All Facilities →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SUPPORT OFFERED */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">Support Offered</h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            The MMES Incubation and Innovation Council invites startups, entrepreneurs, innovators, faculty, and students to incubate their ideas and transform them into impactful ventures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Coins size={32} />, title: 'Grant & Funding Support',
                style: { background: 'linear-gradient(135deg, #1e40af, #2563eb)' },
                points: [
                  'Assistance in applying for funding from DST, MSME, Startup India, AICTE, and other agencies',
                  'Guidance for proposal preparation and submission',
                ],
              },
              {
                icon: <Brain size={32} />, title: 'Mentoring Support',
                style: { background: 'linear-gradient(135deg, #92400e, #b45309)' },
                points: [
                  'Technical mentoring from experienced faculty and domain experts',
                  'Industry mentoring and business guidance',
                ],
              },
              {
                icon: <Scroll size={32} />, title: 'IPR & Patent Support',
                style: { background: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)' },
                points: [
                  'Support for patents, copyrights, and trademarks',
                  'Assistance in documentation and filing',
                ],
              },
              {
                icon: <Handshake size={32} />, title: 'Industry Collaboration',
                style: { background: 'linear-gradient(135deg, #7f1d1d, #b91c1c)' },
                points: [
                  'Linkages with regional industries and real-time problem statements',
                  'Opportunities for pilot projects and consultancy',
                ],
              },
            ].map(item => (
              <motion.div key={item.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl p-7 text-white shadow-lg hover:scale-[1.02] transition-transform" style={item.style}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="font-black text-lg">{item.title}</h4>
                </div>
                <ul className="space-y-2">
                  {item.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-white/90 text-sm">
                      <span className="text-yellow-300 mt-0.5 shrink-0">•</span> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SUSTAINABLE INFRASTRUCTURE FACILITIES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-14">
            Sustainable Infrastructure Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Comprehensive strength testing on concrete and bricks using CTM',
              'Yield tensile strength testing on steel using UTM',
              'Field density testing of soil (core cutter & sand replacement methods)',
              'Concrete design mix and basic property analysis',
              'Water absorption and efflorescence testing of bricks',
              'Non-destructive testing on hardened concrete using rebound hammer',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-5 border-l-4 border-blue-900 shadow-sm">
                <span className="text-blue-900 font-bold shrink-0">✔</span>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHO CAN APPLY + APPLICATION DETAILS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Who Can Apply */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Who Can Apply?</h3>
              <div className="space-y-4">
                {[
                  { icon: <Rocket size={32} />, label: 'Early-stage startups' },
                  { icon: <GraduationCap size={32} />, label: 'Student and faculty innovators' },
                  { icon: <Briefcase size={32} />, label: 'Entrepreneurs working on technology-driven solutions' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4 bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-blue-900 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Details */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Application Details</h3>
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-6">
                <p className="font-bold text-gray-800 mb-4">Submit your:</p>
                <ul className="space-y-2">
                  {['Concept note / business idea', 'Team details', 'Domain of work'].map(s => (
                    <li key={s} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-red-600">✔</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-bold text-gray-900 mb-2">Email:</p>
                <a href="mailto:miic@cahcet.edu.in" className="flex items-center gap-2 text-blue-700 hover:underline text-sm">
                  <Mail size={16} className="shrink-0" /> miic@cahcet.edu.in
                </a>
                <a href="mailto:muzaffar.it@cahcet.edu.in" className="flex items-center gap-2 text-blue-700 hover:underline text-sm">
                  <Mail size={16} className="shrink-0" /> muzaffar.it@cahcet.edu.in
                </a>
                <a href="mailto:hashimba.ece@cahcet.edu.in" className="flex items-center gap-2 text-blue-700 hover:underline text-sm">
                  <Mail size={16} className="shrink-0" /> hashimba.ece@cahcet.edu.in
                </a>
                <p className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                  <Phone size={16} className="shrink-0" /> 9789297572 | 9943295889
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* THRUST AREAS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-gray-50 border-t border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative mb-16 flex justify-center">
            {/* Orange Ribbon Header matching reference image */}
            <div className="relative bg-orange-500 text-white px-12 py-3 shadow-lg z-10">
              <h2 className="text-2xl md:text-3xl font-black text-center uppercase tracking-wider">
                Thrust Areas
              </h2>
              {/* Ribbon slanted edges */}
              <div className="absolute top-0 -left-6 h-full w-6 bg-orange-600 [clip-path:polygon(100%_0,0_50%,100%_100%)]"></div>
              <div className="absolute top-0 -right-6 h-full w-6 bg-orange-600 [clip-path:polygon(0_0,100%_50%,0_100%)]"></div>
            </div>
            {/* Background design line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 -z-0"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="space-y-8">
              {thrustAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-2.5 shrink-0">
                    {/* Red Triangle Bullet matching reference image */}
                    <div className="w-4 h-4 bg-red-700 [clip-path:polygon(0%_0%,100%_50%,0%_100%)] transition-transform group-hover:translate-x-1"></div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-blue-900 leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      {area.items}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Subtle center logo integration */}
            <div className="flex justify-center mt-12 border-t border-gray-100 pt-10">
              <div className="w-32 h-32 rounded-full bg-blue-50 border-2 border-blue-100 flex flex-col items-center justify-center text-center p-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="text-blue-900 font-black text-xs leading-tight">MMES</div>
                <div className="text-blue-700 font-bold text-[10px] leading-tight">Incubation & Innovation</div>
                <div className="text-[8px] text-gray-400 mt-0.5">(MIIC)</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* IPR SERVICES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black mb-4">IPR & Patent Support</h2>
            <p className="text-blue-200 max-w-xl mx-auto">
              MIIC provides end-to-end Intellectual Property Rights support to help innovators protect and commercialise their work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                num: '01', icon: <Search size={32} />, title: 'Prior Art Search',
                points: ['Comprehensive search of existing patents and literature', 'Helps assess novelty before filing'],
              },
              {
                num: '02', icon: <FileText size={32} />, title: 'Drafting & Filing Patent Applications',
                points: ['Support for patents, copyrights, and trademarks', 'Assistance in documentation and filing'],
              },
              {
                num: '03', icon: <Radio size={32} />, title: 'Awareness Sessions',
                points: ['Workshops on IP protection and commercialisation', 'Guidance for student and faculty innovators'],
              },
              {
                num: '04', icon: <Scale size={32} />, title: 'Freedom to Operate Analysis',
                points: ['Evaluate if your product infringes existing patents', 'Risk assessment before market launch'],
              },
            ].map(item => (
              <motion.div key={item.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="bg-blue-800/60 rounded-2xl p-6 hover:bg-blue-800 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-blue-400 font-bold text-xs">{item.num}</div>
                    <div className="text-white font-black text-base">{item.title}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-blue-100 text-sm">
                      <span className="text-blue-400 mt-0.5">▸</span> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="bg-blue-800/40 rounded-2xl p-6 text-center border border-blue-700">
            <p className="text-blue-200 text-sm">
              <Mail size={16} className="shrink-0 mr-2 inline" /> Apply for IPR support: <a href="mailto:muzaffar.it@cahcet.edu.in" className="text-white font-semibold hover:underline">muzaffar.it@cahcet.edu.in</a>
              {' '} | <a href="mailto:hashimba.ece@cahcet.edu.in" className="text-white font-semibold hover:underline">hashimba.ece@cahcet.edu.in</a>
            </p>
          </div>
        </div>
      </motion.section>

      {/* INSTITUTIONAL SUPPORT */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">
            Institutional Support & Alignments
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            MIIC operates under the umbrella of nationally recognised bodies that support innovation and entrepreneurship in India.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
            {[
              { name: 'DST', full: 'Dept. of Science & Technology', emoji: <Microscope size={32} /> },
              { name: 'MSME', full: 'Ministry of MSME', emoji: <Factory size={32} /> },
              { name: 'AICTE', full: 'All India Council for Technical Education', emoji: <GraduationCap size={32} /> },
              { name: 'Startup India', full: 'Govt. of India Initiative', emoji: <Rocket size={32} /> },
              { name: 'ATAL Innovation Mission', full: 'NITI Aayog', emoji: <Lightbulb size={32} /> },
              { name: 'MeitY', full: 'Ministry of Electronics & IT', emoji: <Laptop size={32} /> },
              { name: 'CAHCET', full: 'C. Abdul Hakeem College of Engg.', emoji: <Landmark size={32} /> },
              { name: 'MMES Trust', full: 'Mohamed Masood Educational Society', emoji: <Handshake size={32} /> },
            ].map(item => (
              <motion.div key={item.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all bg-gray-50">
                <span className="text-3xl mb-2">{item.emoji}</span>
                <span className="font-black text-blue-900 text-sm">{item.name}</span>
                <span className="text-gray-400 text-xs mt-1 leading-tight">{item.full}</span>
              </motion.div>
            ))}
          </div>

          {/* Become a Partner CTA */}
          <div className="rounded-3xl p-10 text-center text-white" style={{ background: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)' }}>
            <div className="text-4xl mb-4 flex justify-center"><Handshake size={48} /></div>
            <h3 className="text-2xl md:text-3xl font-black mb-3">Become a Partner</h3>
            <p className="text-blue-200 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
              MIIC is actively looking for investor partners, industry mentors, and corporate collaborators to co-build the startup ecosystem at CAHCET. Be part of groundbreaking innovation from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:muzaffar.it@cahcet.edu.in"
                className="inline-flex items-center gap-2 bg-white text-blue-900 font-black px-7 py-3 rounded-full text-sm hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Mail size={20} className="mr-2 shrink-0" /> Express Your Interest
              </a>
              <a
                href="tel:9789297572"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold px-7 py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                <Phone size={20} className="mr-2 shrink-0" /> Call Us: 9789297572
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
            Turn Your Ideas Into Impact
          </h2>
          <p className="text-red-100 text-lg mb-10">
            Join the MMES Incubation and Innovation Council — Seed. Rise. Scale.
          </p>
          <a
            href="/incubation"
            className="inline-block bg-white text-red-700 font-black px-10 py-4 rounded-full text-lg hover:bg-red-50 transition-colors shadow-2xl hover:shadow-xl"
          >
            Apply for Incubation →
          </a>
        </div>
      </motion.section>

    </div>
  );
}
