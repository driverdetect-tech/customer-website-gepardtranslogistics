
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-tight">
            Privacy <span className="premium-gradient-text">Policy</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <div className="space-y-12">

              <div className="space-y-10 text-slate-700 font-medium leading-relaxed text-[15px]">
                <section>
                  <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Introduction</h2>
                  <p>Gepard Trans Logistics INC (“Company,” “we,” “us,” or “our”) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or communicate with us through any channel, including SMS/text messaging.</p>
                  <p className="mt-4 font-bold text-slate-900">We respect your privacy and will never contact you without your explicit consent.</p>
                  <p className="mt-4 text-[13px] text-slate-500">By using our services, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our services.</p>
                </section>

                <section className="bg-slate-900 rounded-[32px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                  <h2 className="text-2xl font-black mb-8 uppercase tracking-tight text-white border-b border-white/10 pb-5">Our Commitment</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      <p className="text-[15px]">We will <span className="text-white font-black">NEVER</span> send you unsolicited messages — Only contact you after explicit opt-in.</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      <p className="text-[15px]">We will <span className="text-white font-black">NEVER</span> sell your information — Your data is not for sale, period.</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      <p className="text-[15px]">We will <span className="text-white font-black">NEVER</span> share your mobile data for marketing — Your phone number stays with us.</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      <p className="text-[15px]">We will <span className="text-white font-black">ALWAYS</span> honor your opt-out requests — You are in control of your preferences.</p>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Information We Collect</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-2 border-l-2 border-slate-200 pl-3">Personal Information</h4>
                      <p className="text-sm">Contact Info (Name, email, mailing address, telephone, mobile), Business Info (Company name, identifiers), Account Info, Communication Records, and Service Information.</p>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-2 border-l-2 border-slate-200 pl-3">Mobile Information</h4>
                      <p className="text-sm">We only collect your number, consent preferences, and delivery data after you have provided explicit consent.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">How We Use Your Information</h2>
                  <p>We use your data to provide logistics services, send operational communications (load status, delivery confirmations), recruitment updates (if applied), and regulatory compliance notices (FMCSA/DOT). We do <span className="font-bold text-slate-900">NOT</span> use your information for unsolicited marketing.</p>
                </section>

                <section className="bg-slate-50/80 rounded-2xl p-6 md:p-10 border border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight border-b border-slate-200 pb-4">SMS/Text Messaging Privacy</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-black mb-3 uppercase tracking-tight">Consent-Based Only</h3>
                      <p className="text-sm">We obtain consent through website forms, verbal conversations, keyword opt-ins, or written forms. For job applicants, we only message regarding application status and compliance if consent was provided during application.</p>
                    </div>
                    <div className="bg-slate-900 text-white p-6 rounded-2xl">
                      <h3 className="text-[15px] font-black mb-3 uppercase tracking-tight text-white/90">No Sharing of Mobile Information</h3>
                      <p className="text-slate-200 font-bold mb-3 italic text-sm">"IMPORTANT: No mobile information will be shared with third parties or affiliates for marketing or promotional purposes at any time."</p>
                      <p className="text-slate-400 text-[12px] italic leading-relaxed">We do not sell, rent, or lease your number. Sharing is limited purely to telecommunications service providers for delivery purposes under strict confidentiality.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Data Security & Retention</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Security Measures</p>
                      <p className="text-sm">We use encryption, secure storage, and strict access controls to protect your data. While no system is 100% secure, we continuously update our measures.</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Retention</p>
                      <p className="text-sm">We retain data only as long as necessary for service delivery, legal compliance, or dispute resolution. Opt-out requests are processed immediately.</p>
                    </div>
                  </div>
                </section>

                <section className="bg-slate-50/80 rounded-2xl p-6 md:p-10 border border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Your Rights</h2>
                  <p className="text-sm">You have the right to access, correct, or delete your personal information. Residents of California and Illinois may have additional statutory rights which we fully honor.</p>
                  <div className="mt-6 flex flex-wrap gap-6 text-[13px] text-slate-900 font-bold">
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      gepardtranslogistics@gmail.com
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      (312) 684-3444
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Compliance Statements</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-[9px] uppercase tracking-widest font-black text-slate-400">
                    <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-100 text-center">TCPA Compliant</div>
                    <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-100 text-center">CTIA Guidelines</div>
                    <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-100 text-center">A2P 10DLC Verified</div>
                    <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-100 text-center">Anti-Spam Pledge</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
