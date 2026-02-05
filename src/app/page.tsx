"use client"; // Ye line top par hona zaroori hai animation ke liye

import React from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION CONFIGS (Inhe hum niche use karenge) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#333] font-sans selection:bg-[#4A5D4E] selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-50">
        <div className="flex flex-col">
          <span className="text-xl font-serif tracking-wider text-[#2C362F]">MAYA REYNOLDS, PsyD</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Licensed Clinical Psychologist • Santa Monica</span>
        </div>
        <div className="hidden lg:flex space-x-10 text-[11px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#services" className="hover:text-black transition">Specialties</a>
          <a href="#office" className="hover:text-black transition">The Office</a>
        </div>
        <button className="bg-[#4A5D4E] text-white px-6 py-2.5 text-[10px] uppercase tracking-widest hover:bg-[#3d4d41] transition-all rounded-sm">
          Book a Session
        </button>
      </nav>

      {/* --- HERO SECTION --- (Fade In & Slide) */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-16 py-16 md:py-28 gap-12 text-center md:text-left overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="md:w-1/2 space-y-8 order-2 md:order-1"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif leading-[1.1] text-[#2C362F]">
            Healing <br /> 
            <span className="italic text-[#4A5D4E]">starts here.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed font-light">
            Compassionate, evidence-based therapy for adults in <span className="font-semibold text-black underline underline-offset-4 decoration-[#4A5D4E]">Santa Monica, CA</span>. Helping you find resilience in the face of anxiety and burnout.
          </motion.p>
          <motion.div variants={fadeInUp} className="pt-4">
            <button className="bg-[#4A5D4E] text-white px-10 py-5 rounded-sm hover:shadow-xl transition-all font-medium uppercase text-xs tracking-widest">
              Start Your Journey
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 order-1 md:order-2 flex justify-center"
        >
          <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-sm shadow-2xl border-[8px] border-white">
            <img 
              src="/maya.png" 
              alt="Dr. Maya Reynolds, PsyD" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* --- CLINICAL SPECIALITIES SECTION (Pop-up cards on scroll) --- */}
      <section id="services" className="py-24 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#4A5D4E] font-bold block mb-4">Areas of Expertise</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2C362F] italic">Clinical Specialties</h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { t: "Anxiety & Panic", d: "Specialized support for high-achievers who feel 'functional' but struggle with constant worry and overthinking.", img: "https://images.pexels.com/photos/5699435/pexels-photo-5699435.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { t: "Trauma & EMDR", d: "Using evidence-based EMDR and body-oriented techniques to help you process past experiences safely.", img: "https://images.pexels.com/photos/7176030/pexels-photo-7176030.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { t: "Professional Burnout", d: "Helping entrepreneurs and professionals reconnect with themselves and develop sustainable ways of working.", img: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-[#EAE5DF] p-8 flex flex-col items-center text-center space-y-8 rounded-sm hover:shadow-2xl transition-all group border border-transparent hover:border-[#4A5D4E]/10"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-[#2C362F] group-hover:text-[#4A5D4E] transition-colors">{s.t}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-left min-h-[60px]">{s.d}</p>
                </div>
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-2xl transition-transform duration-700">
                  <img src={s.img} alt={s.t} className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- OUR OFFICE: SLIDE FROM LEFT & RIGHT --- */}
      <section id="office" className="py-24 px-6 md:px-16 bg-[#F4F1EE] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-20 items-center">
            
            <div className="w-full lg:w-1/2 relative flex flex-col items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="relative z-10 w-full md:w-4/5 aspect-[4/5] rounded-sm shadow-2xl overflow-hidden border-[8px] border-white"
              >
                <img src="/office1.jpeg" className="w-full h-full object-cover" alt="Dr. Maya's Space" />
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="relative mt-6 md:mt-0 md:absolute md:-bottom-12 md:-right-4 z-20 w-full md:w-3/5 aspect-square rounded-sm shadow-2xl overflow-hidden border-[6px] border-white"
              >
                <img src="/office2.jpeg" className="w-full h-full object-cover" alt="Office Interior" />
              </motion.div>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#4A5D4E] font-bold block">The Practice</span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#2C362F] leading-tight">
                  A Space Designed for <br />
                  <span className="italic text-[#4A5D4E]">Healing & Quiet.</span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p className="text-lg">
                  Located in the heart of <span className="font-semibold text-[#2C362F]">Santa Monica</span>, my office is curated to help you feel grounded and safe during our sessions.
                </p>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="bg-white/60 backdrop-blur-sm p-6 border-l-4 border-[#4A5D4E] shadow-sm"
                >
                  <h4 className="font-bold text-[#2C362F] uppercase text-[10px] tracking-[0.2em] mb-2">Practice Location</h4>
                  <p className="text-sm">123th Street 45 W, Santa Monica, CA</p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION WITH SMALLER IMAGE --- */}
      <section id="faqs" className="py-24 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            
            {/* Left Column: Image (Slightly Smaller) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="w-full lg:w-[40%]" // Image ki width thodi kam kar di
            >
              <div className="relative rounded-sm overflow-hidden shadow-xl border-[6px] border-[#F4F1EE]">
                <img 
                  src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Supportive Consultation" 
                  className="w-full h-[450px] object-cover" // Height control kar di
                />
                <div className="absolute inset-0 bg-[#4A5D4E]/5"></div>
              </div>
            </motion.div>

            {/* Right Column: FAQ List */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="w-full lg:w-[60%] space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#4A5D4E] font-bold block mb-3">Support & Guidance</span>
                <h2 className="text-3xl md:text-4xl font-serif text-[#2C362F] italic">Frequently Asked Questions</h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { q: "Do you offer in-person or virtual sessions?", a: "I offer both. My physical office is in Santa Monica, and I provide secure, HIPAA-compliant telehealth sessions across California." },
                  { q: "What can I expect in the first session?", a: "It's a consultation to discuss your history and goals. We'll see if our connection feels right for your journey." },
                  { q: "Do you take insurance?", a: "I am an out-of-network provider. I can provide 'superbills' which you can submit for potential reimbursement." },
                  { q: "How long does therapy usually last?", a: "It's personal to you. Some find relief in short-term work, while others prefer deeper, long-term exploration." }
                ].map((faq, i) => (
                  <motion.div key={i} variants={fadeInUp} className="bg-[#FDFCFB] p-6 border border-gray-50 rounded-sm">
                    <h3 className="text-md font-serif text-[#2C362F] mb-2 font-semibold">{faq.q}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 px-6 md:px-16 bg-[#2C362F] text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-800 pt-12">
          <div>
            <h3 className="text-white font-serif text-lg tracking-widest uppercase">Maya Reynolds, PsyD</h3>
            <p className="text-[9px] uppercase tracking-[0.2em] mt-2">Santa Monica, CA • Licensed Clinical Psychologist</p>
          </div>
          <p className="text-[9px] uppercase tracking-widest">© 2026 Grown My Therapy Internship Assignment</p>
        </div>
      </footer>
    </main>
  );
}