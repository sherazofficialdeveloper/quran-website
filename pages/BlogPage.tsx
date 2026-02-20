
import React from 'react';

interface Props {
  translations: any;
}

const BlogPage: React.FC<Props> = ({ translations: t }) => {
  const b = t.blog;
  const isRtl = t.dir === 'rtl';

  // Array of Unsplash IDs for high-quality Islamic/Educational imagery
  const unsplashImages = [
    'https://plus.unsplash.com/premium_photo-1677697355460-352eb7e4f2bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVlcGVuaW5nJTIwWW91ciUyMFVuZGVyc3RhbmRpbmclM0ElMjBBbiUyMEludHJvZHVjdGlvbiUyMHRvJTIwdGhlJTIwVGFmc2VlciUyMHVsJTIwUXVyYW4lMjBDb3Vyc2V8ZW58MHx8MHx8fDA%3D',
    'https://media.istockphoto.com/id/1201391493/photo/asian-muslim-man-woman-praying-and-prostrating-at-home.jpg?s=612x612&w=0&k=20&c=bT0Rni5NMSneAXJGcq1nQmzLH5HiZWcoZe7XgIPmF8o=',
    'https://images.unsplash.com/photo-1573483883644-d0b4b55eb25d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJlbmVmaXRzJTIwb2YlMjBFbnJvbGxpbmclMjBpbiUyMGFuJTIwT25saW5lJTIwQWxpbSUyMEFsaW1haCUyMENvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://media.istockphoto.com/id/1150931835/photo/muslim-family-reading-quran-together-in-livingroom.jpg?s=612x612&w=0&k=20&c=w2qeQWpxhI7y85a8NY-k3sjAwWx7Lyfc5Ke95s2JWHQ=',
    'https://plus.unsplash.com/premium_photo-1679952777234-f82a6b4b89f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VW5sb2NrJTIwdGhlJTIwQmVuZWZpdHMlMjBvZiUyMFF1cmFuJTIwS2FyZWVtJ3MlMjBUYWZzZWVyJTIwdWwlMjBRdXJhbiUyMENvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://media.istockphoto.com/id/1247843125/photo/distance-learning.jpg?s=612x612&w=0&k=20&c=cN1ig6tuxEKOokhItemsDGlHcS9JMZ-kwCf8fwVQlsc=',
  ];

  return (
    <div className={`pt-24 pb-0 bg-[#052e1b] min-h-screen ${isRtl ? 'font-amiri' : 'font-poppins'}`}>
      
      {/* Blog Title Header with Breadcrumb Style */}
      <section className="relative py-24 bg-gradient-to-b from-[#0F5132]/30 to-transparent border-b border-[#D4AF37]/10">
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1576764402988-7143f9cca90a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVyYW58ZW58MHx8MHx8fDA%3D')]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 animate-fade-up">
          <h1 className="font-cinzel text-4xl sm:text-6xl font-bold text-[#D4AF37] mb-6 drop-shadow-xl">
            {b.hero.title}
          </h1>
          <nav className="flex justify-center items-center gap-3 text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-xs">
            <span className="opacity-60">{isRtl ? 'ہوم' : 'Home'}</span>
            <span className="w-4 h-[1px] bg-[#D4AF37]/40"></span>
            <span>{isRtl ? 'بلاگ' : 'Blog'}</span>
          </nav>
        </div>
      </section>

      {/* Main Blog Grid - 3 Column structure */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {b.posts.map((post: any, i: number) => (
            <div 
              key={i} 
              className="reveal group flex flex-col bg-[#0F5132]/10 border border-[#D4AF37]/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/40 hover:bg-[#0F5132]/20 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              {/* Card Image with Unsplash Integration */}
              <div className="h-60 bg-[#021a0f] relative overflow-hidden flex items-center justify-center border-b border-[#D4AF37]/5">
                 <img 
                    src={unsplashImages[i % unsplashImages.length]} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[5s]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#021a0f] to-transparent opacity-60"></div>
                 
                 {/* Large Icon inside the box */}
                 <div className="relative z-10 w-28 h-28 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center bg-[#052e1b]/40 backdrop-blur-sm group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-700 shadow-2xl">
                    <span className="text-6xl drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">📜</span>
                 </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow text-left rtl:text-right">
                <h3 className="font-cinzel text-xl text-white font-bold mb-6 group-hover:text-[#D4AF37] transition-colors leading-tight min-h-[4rem]">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-10 line-clamp-4 flex-grow font-light">
                  {post.desc}
                </p>
                <div className="mt-auto">
                   <button className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 group/btn hover:text-white transition-colors">
                     {b.readMore} 
                     <span className={`${isRtl ? 'group-hover/btn:-translate-x-2 rotate-180' : 'group-hover/btn:translate-x-2'} transition-transform`}>→</span>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Large Learn Quran Banner */}
      <section className="py-24 px-4 overflow-hidden reveal">
         <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#0F5132] via-[#052e1b] to-[#0F5132] border border-[#D4AF37]/20 rounded-[4rem] p-12 sm:p-24 relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
               <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-[5s]">
                  <span className="text-[15rem] font-bold text-white">☪</span>
               </div>
               
               <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                  <div className="flex-grow text-center lg:text-left rtl:text-right">
                     <h2 className="font-cinzel text-4xl sm:text-6xl text-white font-bold mb-12 leading-tight drop-shadow-2xl">
                        {b.banner.title}
                     </h2>
                     <a href="https://wa.me/923030713623" target="_blank" rel="noopener noreferrer">
                     <button className="md:px-16 py-7 bg-[#D4AF37] text-[#052e1b] rounded-2xl md:font-bold md:text-xl hover:bg-white hover:scale-105 transition-all shadow-2xl gold-glow uppercase tracking-[0.3em]">
                        {b.banner.btn}
                     </button></a> 
                  </div>
                  
                  {/* Visual Circle (Placeholder for imagery) */}
                  <div className="hidden lg:flex w-96 h-96 rounded-full border-[12px] border-white/5 flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/10 to-transparent relative shadow-[0_0_80px_rgba(212,175,55,0.1)] overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1590076215667-874d11293f77?auto=format&fit=crop&q=80&w=800" 
                        alt="Quran Journey" 
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[10s]"
                     />
                     <div className="absolute inset-0 border-[1px] border-white/10 rounded-full animate-spin-slow"></div>
                     <span className="text-[10rem] group-hover:rotate-12 transition-transform duration-700 drop-shadow-2xl opacity-90 relative z-10">📖</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default BlogPage;
