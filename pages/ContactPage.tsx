
import React, { useRef, useState } from 'react';

interface Props {
  translations: any;
}

const ContactPage: React.FC<Props> = ({ translations: t }) => {
  const c = t.contact;
  const isRtl = t.dir === 'rtl';
  const formRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: c.form.course,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getMethodLink = (index: number) => {
    const phoneNumber = "+923030713623"; // Replace with actual number
    const emailAddr = "sajidsajid013@gmail.com";
    switch (index) {
      case 0: return `https://wa.me/${phoneNumber}`; // WhatsApp
      case 1: return `tel:${phoneNumber}`;           // Call
      case 2: return `mailto:${emailAddr}`;         // Email
      default: return "#";
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "+923030713623"; // Replace with actual number
    
    // Construct WhatsApp message
    const whatsappMessage = `*New Inquiry from Quran Kareem Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Course:* ${formData.course}%0A` +
      `*Message:* ${formData.message}`;

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className={`pt-24 pb-0 bg-[#052e1b] min-h-screen ${isRtl ? 'font-amiri' : 'font-poppins'}`}>
      
      {/* Hero Header Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0F5132]/30 to-transparent border-b border-[#D4AF37]/10 overflow-hidden">
        <div className="absolute inset-0 opacity-50 pointer-events-none bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1597505495109-7fc35bb64d8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVyYW4lMjBpc2xhbWljfGVufDB8fDB8fHww')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 animate-fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-8">
            {c.hero.badge}
          </div>
          <h1 className="font-cinzel text-4xl sm:text-6xl font-bold text-[#D4AF37] mb-8 leading-tight">
            {c.hero.title}
          </h1>
          <p className="text-white/60 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
            {c.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {c.methods.map((method: any, i: number) => (
            <div 
              key={i} 
              className={`reveal group p-10 rounded-[3rem] bg-[#0F5132]/10 border ${i === 0 ? 'border-[#25D366]/40 bg-[#25D366]/5' : 'border-[#D4AF37]/20'} hover:border-[#D4AF37]/60 transition-all duration-700 shadow-2xl flex flex-col items-center text-center`}
            >
              <div className="w-24 h-24 rounded-[2rem] bg-[#052e1b] border-2 border-white/5 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition-transform shadow-inner">
                {method.icon}
              </div>
              <h3 className="font-cinzel text-2xl text-white font-bold mb-6 group-hover:text-[#D4AF37] transition-colors uppercase tracking-widest">
                {method.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-10 flex-grow font-light">
                {method.desc}
              </p>
              <a 
                href={getMethodLink(i)}
                target={i === 0 ? "_blank" : undefined}
                rel={i === 0 ? "noopener noreferrer" : undefined}
                className={`w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all gold-glow flex items-center justify-center ${i === 0 ? 'bg-[#25D366] text-white hover:bg-[#128C7E]' : 'bg-[#D4AF37] text-[#052e1b] hover:bg-white'}`}
              >
                {method.btn}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
           <div className={`space-y-8 ${isRtl ? 'text-right' : 'text-left'}`}>
              <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white leading-tight">
                 {c.form.title}
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                 {c.form.subtitle}
              </p>
              
              <div className="space-y-6 pt-6 border-t border-white/5">
                 <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xl group-hover:bg-[#D4AF37]/10 transition-all">🏠</div>
                    <div>
                       <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em]">Our Office</p>
                       <p className="text-white/60">Digital Academy - Global Online Campus</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xl group-hover:bg-[#D4AF37]/10 transition-all">🕒</div>
                    <div>
                       <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em]">Support Hours</p>
                       <p className="text-white/60">24 Hours / 7 Days a week</p>
                    </div>
                 </div>
              </div>
           </div>

           <div ref={formRef} className="bg-[#0F5132]/30 p-8 sm:p-12 rounded-[4rem] border border-[#D4AF37]/20 shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input 
                       required
                       type="text" 
                       name="name"
                       value={formData.name}
                       onChange={handleInputChange}
                       placeholder={c.form.name}
                       className="w-full bg-[#052e1b]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#D4AF37]/40 transition-all placeholder-white/20"
                    />
                    <input 
                       required
                       type="email" 
                       name="email"
                       value={formData.email}
                       onChange={handleInputChange}
                       placeholder={c.form.email}
                       className="w-full bg-[#052e1b]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#D4AF37]/40 transition-all placeholder-white/20"
                    />
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input 
                       required
                       type="tel" 
                       name="phone"
                       value={formData.phone}
                       onChange={handleInputChange}
                       placeholder={c.form.phone}
                       className="w-full bg-[#052e1b]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#D4AF37]/40 transition-all placeholder-white/20"
                    />
                    <select 
                       name="course"
                       value={formData.course}
                       onChange={handleInputChange}
                       className="w-full bg-[#052e1b]/50 border border-white/10 rounded-2xl px-6 py-4 text-white/50 focus:outline-none focus:border-[#D4AF37]/40 transition-all"
                    >
                       <option>{c.form.course}</option>
                       <option>Noorani Qaida</option>
                       <option>Quran Reading</option>
                       <option>Tafseer-ul-Quran</option>
                       <option>Qiraat Ashra</option>
                    </select>
                 </div>
                 <textarea 
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={c.form.message}
                    className="w-full bg-[#052e1b]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#D4AF37]/40 transition-all placeholder-white/20"
                 ></textarea>
                 <button 
                   type="submit"
                   className="w-full py-5 bg-[#D4AF37] text-[#052e1b] rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-2xl gold-glow uppercase tracking-widest"
                 >
                    {c.form.btn}
                 </button>
              </form>
           </div>
        </div>
      </section>

      {/* Decorative Bottom Banner */}
      <section className="py-24 px-4 reveal">
         <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-[4rem] p-12 sm:p-24 relative overflow-hidden group shadow-2xl text-center">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] group-hover:scale-110 transition-transform duration-[10s]"></div>
               <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#052e1b] mb-10 relative z-10 leading-tight">
                  {isRtl ? 'آج ہی اپنے قرآنی سفر کا آغاز کریں' : 'Join thousands of students on their spiritual path today.'}
               </h2>
               <div className="flex flex-wrap justify-center gap-6 relative z-10">
                  <button 
                    onClick={scrollToForm}
                    className="px-12 py-5 bg-[#052e1b] text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-[#052e1b] transition-all shadow-xl uppercase tracking-widest"
                  >
                     Register Now
                  </button>
                  <a 
                    href={getMethodLink(0)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-12 py-5 border-4 border-[#052e1b] text-[#052e1b] rounded-2xl font-bold text-xl hover:bg-[#052e1b] hover:text-white transition-all uppercase tracking-widest flex items-center justify-center"
                  >
                     Live Chat
                  </a>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ContactPage;
