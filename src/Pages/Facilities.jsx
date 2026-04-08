import { motion } from 'framer-motion';
import { Microscope, FlaskConical, Building, Laptop, ShieldCheck, Zap, FileText, Download } from 'lucide-react';

// Import images
import aahlMain from '../Images/Labs/AAHL facility.jpeg';
import aahl1 from '../Images/Labs/AAHL facility 1.jpeg';
import aahl2 from '../Images/Labs/AAHL facility 2.jpeg';
import aahl3 from '../Images/Labs/AAHL facility 3.jpeg';
import rdLab from '../Images/Labs/R&D lab.jpeg';

const facilities = [
  {
    id: 1,
    title: 'Aquatic Animal Health Laboratory (AAHL)',
    category: 'Bio-Innovation',
    description: 'Our NABL-accredited Aquatic Animal Health Laboratory provides state-of-the-art biological and environmental testing services. It is equipped for advanced research in aquatic life sciences and disease diagnostics.',
    image: aahlMain,
    icon: <Microscope className="w-6 h-6" />,
    features: ['NABL Accredited', 'Pathogen Detection', 'Water Quality Analysis', 'Environmental Monitoring']
  },
  {
    id: 2,
    title: 'Advanced Research & Development Lab',
    category: 'R&D',
    description: 'A dedicated space for product development and experimental research. The R&D lab is designed to support startups in transforming concepts into functional prototypes.',
    image: rdLab,
    icon: <FlaskConical className="w-6 h-6" />,
    features: ['Prototyping Tools', 'Advanced Equipment', 'Precision Instruments', 'Expert Guidance']
  },
  {
    id: 3,
    title: 'AAHL Diagnostic Section',
    category: 'Laboratory',
    description: 'Specialized section of AAHL focused on clinical diagnostics and molecular analysis for aquatic species.',
    image: aahl1,
    icon: <ShieldCheck className="w-6 h-6" />,
    features: ['Molecular Diagnostics', 'Microbial Analysis', 'High Accuracy', 'Rapid Testing']
  },
  {
    id: 4,
    title: 'Innovation Hub Workspace',
    category: 'Infrastructure',
    description: 'Modern office spaces and collaborative environments designed for early-stage startups to work, connect, and scale.',
    image: aahl2,
    icon: <Building className="w-6 h-6" />,
    features: ['High-speed Internet', 'Nominal Rent', 'Meeting Rooms', 'Networking Events']
  },
  {
    id: 5,
    title: 'Computational & IoT Lab',
    category: 'Technology',
    description: 'Equipped with high-performance computing systems and IoT development kits to support AI, ML, and automation projects.',
    image: aahl3,
    icon: <Laptop className="w-6 h-6" />,
    features: ['GPU Support', 'IoT Kits', 'Cloud Integration', 'AI Modeling']
  }
];

const Facilities = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-20">
      {/* Header Section */}
      <section className="relative py-20 bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              WORLD-CLASS <span className="text-blue-400">FACILITIES</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              MIIC provides state-of-the-art infrastructure and NABL-accredited laboratories to empower innovators and startups to build the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden group">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {facility.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    {facility.title}
                  </h3>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {facility.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {facility.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-blue-600" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-900 flex items-center justify-center text-white shadow-lg">
                      {facility.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Status</div>
                      <div className="text-sm font-bold text-blue-900">Operational</div>
                    </div>
                  </div>
                  <button className="text-blue-600 font-bold text-sm hover:underline">
                    Inquire Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sustainable Infrastructure Highlight (Matching Home.jsx styling but deeper) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Sustainable Infrastructure</h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Beyond specialized labs, we provide a wide range of testing and fabrication facilities for civil, mechanical, and environmental engineering sectors.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Concrete Testing', desc: 'Comprehensive strength testing on concrete and bricks using CTM.' },
              { title: 'Steel Analysis', desc: 'Yield tensile strength testing on steel using UTM.' },
              { title: 'Soil Mechanics', desc: 'Field density testing of soil (core cutter & sand replacement methods).' },
              { title: 'Design Optimization', desc: 'Concrete design mix and basic property analysis.' },
              { title: 'Material Durability', desc: 'Water absorption and efflorescence testing of bricks.' },
              { title: 'Non-Destructive Testing', desc: 'NDT on hardened concrete using rebound hammer.' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all group"
              >
                <h4 className="text-blue-900 font-black text-lg mb-3 group-hover:text-blue-700 transition-colors uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Documentation Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Technical Documentation</h2>
              <p className="text-gray-500">
                Detailed lists of equipment, laboratory specifications, and infrastructure capabilities available for startups and researchers.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white px-4 py-2 rounded-full border border-gray-200 text-xs font-bold text-gray-400 uppercase tracking-widest">
                3 Documents Available
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'General Equipment List',
                file: '10.1 equipment final.docx',
                size: '517 KB',
                desc: 'Comprehensive inventory of all laboratory equipment and scientific instruments available at MIIC.',
                icon: <FileText className="w-8 h-8 text-blue-600" />
              },
              {
                title: 'IoT Lab Facilities',
                file: 'List of facilities in IOT Lab.docx',
                size: '15 KB',
                desc: 'Detailed specifications of development kits, sensors, and computing systems in the IoT application lab.',
                icon: <Laptop className="w-8 h-8 text-indigo-600" />
              },
              {
                title: 'Infrastructure Details',
                file: 'Sustainable Infrastructure Facilities.docx',
                size: '14 KB',
                desc: 'Technical breakdown of civil and environmental infrastructure testing capabilities.',
                icon: <Building className="w-8 h-8 text-red-600" />
              }
            ].map((doc, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                  {doc.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                  {doc.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-wider">
                    DOCX • {doc.size}
                  </div>
                  <a 
                    href={`/src/Documents/${doc.file}`} 
                    download 
                    className="flex items-center gap-2 text-blue-600 text-sm font-bold hover:text-blue-800 transition-colors"
                  >
                    Download <Download className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-900 to-indigo-900 rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6">Need Lab Access?</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Our facilities are open to startups, researchers, and professional projects. 
            Contact us today to book your slot or discuss collaboration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:miic@cahcet.edu.in" className="bg-white text-blue-900 font-black px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
              Contact MIIC
            </a>
            <a href="/incubation" className="bg-blue-600 text-white font-black px-10 py-4 rounded-full hover:bg-blue-500 transition-colors">
              Apply for Incubation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
