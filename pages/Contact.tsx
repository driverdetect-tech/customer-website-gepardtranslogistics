
import React, { useState } from 'react';
import { ContactFormData } from '../types';

const countries = [
  { code: 'US', dial_code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'CA', dial_code: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: 'GB', dial_code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'AU', dial_code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: 'DE', dial_code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: 'FR', dial_code: '+33', flag: '🇫🇷', name: 'France' },
  { code: 'AE', dial_code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: 'MX', dial_code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: 'BR', dial_code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: 'CN', dial_code: '+86', flag: '🇨🇳', name: 'China' },
  { code: 'IN', dial_code: '+91', flag: '🇮🇳', name: 'India' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    smsConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  if (submitted) {
    return (
      <div className="py-32 px-6 text-center max-w-xl mx-auto min-h-screen bg-white">
        <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-black/10 rotate-12 transition-transform">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">Request Received!</h2>
        <p className="text-base text-slate-500 mb-8 font-medium leading-relaxed italic">
          Thank you for reaching out, {formData.firstName}. Our logistics team is reviewing your request and will contact you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary"
        >
          <span className="text-[11px] font-black tracking-widest uppercase">SEND ANOTHER MESSAGE</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Hero */}
      <section className="pt-32 pb-12 px-6 bg-slate-50/50 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-gradient-to-b from-slate-100/50 to-transparent -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-black font-black uppercase tracking-[0.2em] text-[9px] mb-4 block border border-black/5 w-fit mx-auto px-3 py-1 rounded-full bg-white/50">
            GET A CUSTOM QUOTE
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-tight">
            LET'S MOVE <br />
            <span className="premium-gradient-text">YOUR FREIGHT</span>
          </h1>
          <p className="text-base text-slate-500 max-w-lg mx-auto font-medium leading-relaxed italic border-l-2 border-slate-200 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            Fill out the details below and our logistics specialists will get back to you with a competitive bid in minutes.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-premium border border-slate-100 p-6 md:p-12 relative -mt-6 z-20">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Personal Section */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 text-slate-900 transition-all outline-none font-bold placeholder:text-slate-300 text-sm"
                      placeholder="e.g. John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 text-slate-900 transition-all outline-none font-bold placeholder:text-slate-300 text-sm"
                      placeholder="e.g. Doe"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 text-slate-900 transition-all outline-none font-bold placeholder:text-slate-300 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <div className="flex gap-3">
                      <div className="relative min-w-[80px]">
                        <select
                          value={selectedCountry.code}
                          onChange={(e) => {
                            const country = countries.find(c => c.code === e.target.value);
                            if (country) setSelectedCountry(country);
                          }}
                          className="w-full appearance-none px-3 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-black text-slate-900 transition-all outline-none cursor-pointer font-bold text-sm"
                        >
                          {countries.map(country => (
                            <option key={country.code} value={country.code}>{country.flag}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-slate-400">
                          <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </div>
                      </div>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 text-slate-900 transition-all outline-none font-bold placeholder:text-slate-300 text-sm"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Consent & Submit */}
              <div className="pt-6 border-t border-slate-100 space-y-6">
                <div className="flex gap-3 items-start bg-slate-50/50 p-5 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-lg">
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      id="smsConsent"
                      name="smsConsent"
                      type="checkbox"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      className="w-5 h-5 text-black border-slate-300 rounded focus:ring-black cursor-pointer"
                    />
                  </div>
                  <label htmlFor="smsConsent" className="text-[10px] text-slate-500 leading-relaxed cursor-pointer select-none font-bold uppercase tracking-tight">
                    By providing your phone number and checking this box, you agree to receive SMS messages from Gepard Trans Logistics INC including load status updates, delivery notifications, appointment reminders, application status updates, and DOT/FMCSA compliance alerts. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply HELP for help. Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.
                  </label>
                </div>

                <div className="flex justify-center">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full md:w-fit md:px-12 py-4 rounded-xl font-black text-xs tracking-[0.2em] transition-all transform active:scale-[0.98] uppercase flex items-center justify-center gap-4 ${isSubmitting ? 'bg-slate-300 cursor-not-allowed text-white' : 'btn-primary'
                      }`}
                  >
                    {isSubmitting ? 'SENDING...' : 'GET MY QUOTE NOW'}
                    {!isSubmitting && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-16 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
            <h4 className="font-black text-slate-900 uppercase tracking-tight text-base mb-3">Direct Office</h4>
            <p className="text-slate-600 font-bold text-base">(224) 526-5606</p>
          </div>
          <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
            <h4 className="font-black text-slate-900 uppercase tracking-tight text-base mb-3">Mailing Address</h4>
            <p className="text-slate-600 font-bold leading-relaxed text-sm">
              3601 W ALGONQUIN RD SUITE 620,<br />
              ROLLING MEADOWS, IL 60008
            </p>
          </div>
          <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
            <h4 className="font-black text-slate-900 uppercase tracking-tight text-base mb-3">Working Hours</h4>
            <p className="text-slate-600 font-bold leading-relaxed text-sm">
              Dispatch: 24/7/365<br />
              Admin: Mon - Fri, 9am - 5pm
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
