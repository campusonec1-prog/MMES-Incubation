import { Link } from 'react-router-dom';

/* ─── Social icon SVGs ─── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

/* ─── Placeholder social post tiles ─── */
const socialPosts = {
  LinkedIn: ['#1e3a8a', '#1d4ed8', '#1e40af', '#3b82f6'],
  Facebook: ['#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa'],
  Instagram: ['#9333ea', '#a855f7', '#c026d3', '#e879f9'],
  Twitter: ['#475569', '#334155', '#1e293b', '#64748b'],
};

const annualYears = ['Year 23-24', 'Year 22-23', 'Year 21-22', 'Year 20-21', 'Year 19-20'];

const addresses = [
  {
    city: 'Melvisharam (Headquarters)',
    email: 'miic@cahcet.edu.in',
    phones: ['+91 98765 43210'],
    address: 'C. Abdul Hakeem College of Engineering and Technology, Melvisharam, Ranipet District – 632 509, Tamil Nadu, India',
  },
  {
    city: 'Chennai',
    email: 'miic.chennai@cahcet.edu.in',
    phones: ['+91 91760 72920'],
    address: 'Startup Hub, Anna Nagar, Chennai – 600 040',
  },
  {
    city: 'Bengaluru',
    email: 'miic.blr@cahcet.edu.in',
    phones: ['+91 88929 29860'],
    address: 'StartUp Hub of India, Bengaluru',
  },
  {
    city: 'Ranipet',
    email: 'miic.ranipet@cahcet.edu.in',
    phones: ['+91 99446 31425'],
    address: 'MIIC Satellite Office, Ranipet Industrial Area, Tamil Nadu',
  },
];

/* ─── FOOTER ─────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' }} className="text-white">

      {/* ── Brochure / Downloads ── */}
      <div className="border-b border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <p className="text-lg font-bold text-white min-w-max">Click Here to Download Brochure</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Enquiry Form', icon: '→' },
              { label: 'Startup Compendium', icon: '↓' },
              { label: 'Download Brochure', icon: '↓' },
            ].map(btn => (
              <button
                key={btn.label}
                className="flex items-center gap-2 bg-red-700 hover:bg-red-600 transition-colors px-5 py-2.5 rounded text-sm font-semibold"
              >
                {btn.label} <span>{btn.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Annual Reports ── */}
      <div className="border-b border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <p className="text-base font-bold text-white min-w-max">Annual Reports</p>
          <div className="flex flex-wrap gap-2">
            {annualYears.map(y => (
              <button
                key={y}
                className="flex items-center gap-1.5 border border-red-600 text-white hover:bg-red-700 transition-colors px-4 py-1.5 rounded-full text-xs font-semibold"
              >
                <span className="text-red-400">⊙</span> {y}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Social Posts Grid ── */}
      <div className="border-b border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(socialPosts).map(([platform, colors]) => (
            <div key={platform}>
              <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                <span className="block w-6 h-0.5 bg-red-500"></span>
                {platform} Posts
              </h4>
              <div className="grid grid-cols-2 gap-1.5">
                {colors.map((c, i) => (
                  <div
                    key={i}
                    className="w-full aspect-square rounded-md opacity-70 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center text-white/30 text-xs font-bold"
                    style={{ background: c }}
                  >
                    MIIC
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Social Icons + MIIC_UPDATES ── */}
      <div className="border-b border-white/10 py-8 px-6 text-center">
        <div className="flex justify-center gap-3 mb-3">
          {[
            { Icon: LinkedInIcon, href: 'https://linkedin.com' },
            { Icon: FacebookIcon, href: 'https://facebook.com' },
            { Icon: XIcon, href: 'https://x.com' },
            { Icon: InstagramIcon, href: 'https://instagram.com' },
            { Icon: YouTubeIcon, href: 'https://youtube.com' },
          ].map(({ Icon, href }, i) => (
            <a
              key={i} href={href} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
        <p className="text-lg font-black tracking-widest text-white/80 uppercase">MIIC_UPDATES</p>
      </div>

      {/* ── Address Columns ── */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Melvisharam HQ — full details */}
          <div className="sm:col-span-1">
            <h4 className="font-black text-white mb-4 text-sm">Melvisharam (Headquarters)</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 opacity-60">✉</span>
                <a href="mailto:muzaffar.it@cahcet.edu.in" className="hover:text-white transition-colors break-all">muzaffar.it@cahcet.edu.in</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 opacity-60">✉</span>
                <a href="mailto:hashimba.ece@cahcet.edu.in" className="hover:text-white transition-colors break-all">hashimba.ece@cahcet.edu.in</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="opacity-60 shrink-0">📞</span>
                <span>9789297572 | 9943295889</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 opacity-60 shrink-0">📍</span>
                <span>C. Abdul Hakeem College of Engineering and Technology, Melvisharam, Ranipet District – 632 509, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          {/* Chennai — Launching Soon */}
          {[
            { city: 'Chennai', desc: 'Startup Hub, Anna Nagar' },
            { city: 'Bengaluru', desc: 'StartUp Hub of India' },
          ].map(loc => (
            <div key={loc.city} className="flex flex-col">
              <h4 className="font-black text-white mb-4 text-sm">{loc.city}</h4>
              <div className="flex-1 flex flex-col items-start justify-center gap-3 bg-white/5 rounded-xl border border-white/10 p-5">
                <span className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-400/30">
                  🚧 Launching Soon
                </span>
                <p className="text-white/50 text-sm">{loc.desc}</p>
                <p className="text-white/40 text-xs">Stay tuned — MIIC is expanding to {loc.city}!</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ── Copyright ── */}
      <div
        className="py-4 px-6 text-center text-xs text-white/40 border-t border-white/10"
      >
        Copyright © MMES Incubation and Innovation Council | All Rights Reserved
      </div>
    </footer>
  );
}
