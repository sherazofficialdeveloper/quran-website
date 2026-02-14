
import React from 'react';

interface StatsProps {
  translations: any;
}

const Stats: React.FC<StatsProps> = ({ translations: t }) => {
  const stats = [
    { val: '10,000+', label: 'Happy Students', icon: '👥' },
    { val: '50+', label: 'Expert Teachers', icon: '🎓' },
    { val: '14+', label: 'Premium Courses', icon: '📜' },
    { val: '15+', label: 'Years Excellence', icon: '🏆' }
  ];

  return (
    <section className="py-24 bg-[#0F5132] relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {stats.map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="text-4xl mb-6 transform group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.val}</div>
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
