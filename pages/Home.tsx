
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-24 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 skew-x-[-8deg] translate-x-1/4"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.05] tracking-tight text-primary uppercase">
              PRECISION <br />
              <span className="premium-gradient-text">IN EVERY</span> <br />
              MILE
            </h1>
            <p className="text-base md:text-lg text-slate-500 mb-8 max-w-md font-medium leading-relaxed italic">
              Premium flatbed and industrial freight solutions tailored for your business. Experience the industry standard of safety and reliability across the lower 48.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                <span className="text-[11px] font-black tracking-widest uppercase">Start Your Journey</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in md:block hidden" style={{ animationDelay: '0.1s' }}>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-8 border-white group">
              <img
                src="/hero_truck.png"
                alt="Premium Flatbed Truck"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            {/* Soft decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-6 uppercase">
                SCALABLE <br /><span className="premium-gradient-text">LOGISTICS SOLUTIONS</span>
              </h2>
              <p className="text-base text-slate-500 font-medium leading-relaxed italic border-l-2 border-accent/30 pl-6">
                Gepard Trans Logistics INC specialized in high-value automotive and industrial transport across the United States.
                Our commitment to transparency and a driver-first approach ensures your cargo arrives with zero compromise.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Uncompromising Safety', desc: 'Industry-leading safety protocols and real-time monitoring to ensure your freight is protected every second of the trip.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: '24/7 Command Center', desc: 'Our dedicated dispatchers provide around-the-clock support, giving you total visibility and peace of mind.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Nationwide Reach', desc: 'Strategic coverage across all 48 continental states, powered by local expertise and premium equipment.', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((feature, i) => (
              <div key={i} className="card-premium group hover:bg-white transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-black mb-3 text-primary uppercase tracking-tight">{feature.title}</h3>
                <p className="text-[15px] text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="relative overflow-hidden bg-primary rounded-[32px] p-12 md:p-20 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#FFFFFF_0%,transparent_50%)]"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
                READY TO <span className="text-accent">UPGRADE?</span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto font-medium leading-relaxed italic">
                Contact the logistics specialists at Gepard Trans Logistics INC today and experience the difference of a premium partnership.
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-slate-100 py-4 px-10">
                  <span className="text-sm font-black tracking-widest uppercase">Request a Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;
