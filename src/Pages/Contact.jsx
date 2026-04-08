import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a premium sending process
    setTimeout(() => {
      const subject = encodeURIComponent(`Message from ${formData.firstName} ${formData.lastName}`);
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      );
      
      // Trigger the mailto link
      window.location.href = `mailto:miic@cahcet.edu.in?subject=${subject}&body=${body}`;
      
      setIsSubmitting(false);
      setIsSent(true);

      // Reset success state after some time
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-blue-900 py-24 text-white text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Contact Us</h1>
          <p className="text-blue-100 max-w-xl mx-auto px-4 text-lg">
            Have a question or want to collaborate? <br className="hidden md:block"/> Reach out to the MIIC team.
          </p>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[120px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
      </section>

      <div className="max-w-6xl mx-auto py-24 px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-black text-gray-900 mb-10">Get in Touch</h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-5 rounded-3xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Email Support</h4>
                  <p className="text-gray-500 mb-2 font-medium">Technical & Administrative Inquiries:</p>
                  <a href="mailto:miic@cahcet.edu.in" className="text-blue-700 font-extrabold text-lg hover:underline block mb-1">miic@cahcet.edu.in</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-5 rounded-3xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Call Us</h4>
                  <p className="text-gray-500 mb-2 font-medium">Available Mon-Sat: 9:00 AM - 5:00 PM</p>
                  <p className="text-blue-900 font-black text-xl tracking-tight">+91 9789297572 | 9943295889</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-5 rounded-3xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Visit Our Hub</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    C. Abdul Hakeem College of Engineering & Technology,<br />
                    Melvisharam – 632 509, Ranipet District,<br />
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-2xl relative z-10">
              <h3 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">Send a Message</h3>
              
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase ml-2 tracking-widest">First Name</label>
                        <input 
                          required
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          type="text" 
                          placeholder="John" 
                          className="w-full bg-gray-50 p-4 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-semibold text-gray-900 outline-none" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase ml-2 tracking-widest">Last Name</label>
                        <input 
                          required
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          type="text" 
                          placeholder="Doe" 
                          className="w-full bg-gray-50 p-4 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-semibold text-gray-900 outline-none" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase ml-2 tracking-widest">Email Address</label>
                      <input 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-gray-50 p-4 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-semibold text-gray-900 outline-none" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase ml-2 tracking-widest">Your Message</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?" 
                        rows="5" 
                        className="w-full bg-gray-50 p-4 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-semibold text-gray-900 outline-none resize-none"
                      ></textarea>
                    </div>
                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className={`w-full group py-5 px-6 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-blue-900/40 relative overflow-hidden ${
                         isSubmitting ? 'bg-blue-800 cursor-not-allowed text-white/50' : 'bg-blue-900 text-white hover:bg-black'
                      }`}
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={24} />
                      ) : (
                        <>
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 shadow-inner">
                      <CheckCircle size={48} />
                    </div>
                    <h4 className="text-3xl font-black text-gray-900 mb-4 uppercase">Message Ready!</h4>
                    <p className="text-gray-500 font-medium leading-relaxed mb-8">
                      Your email client has been opened with the message details. Please click "Send" in your email app.
                    </p>
                    <button 
                      onClick={() => setIsSent(false)}
                      className="text-blue-600 font-black hover:underline uppercase tracking-widest text-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Background design line */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-blue-900 rounded-[40px] -z-0 opacity-5"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
