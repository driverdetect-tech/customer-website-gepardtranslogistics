
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-tight">
            Terms of <span className="premium-gradient-text">Service</span>
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
                  <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Acceptance of Terms</h2>
                  <p>By accessing or using the services provided by Gepard Trans Logistics INC (“Company,” “we,” “us,” or “our”), including but not limited to our website, mobile applications, SMS/text messaging services, and transportation services, you (“User,” “you,” or “your”) agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, please do not use our services.</p>
                </section>

                <section>
                  <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Description of Services</h2>
                  <p>Gepard Trans Logistics INC provides freight transportation, trucking, logistics, and related services. We may communicate with you regarding our services through various channels, including but not limited to email, telephone, and SMS/text messaging, but only after obtaining your explicit consent.</p>
                </section>

                <section className="bg-slate-900 rounded-[32px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                  <h2 className="text-2xl font-black mb-8 uppercase tracking-tight text-white border-b border-white/10 pb-5">SMS/Text Messaging Terms</h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-black mb-3 text-white uppercase tracking-tight">Program Description</h3>
                      <p className="text-slate-400">Gepard Trans Logistics INC offers an SMS/text messaging program to provide you with important updates related to our transportation services and employment opportunities. By opting in, you consent to receive automated text messages related to:</p>
                      <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside text-sm">
                        <li>Operational: Status updates, delivery confirmations, scheduling alerts.</li>
                        <li>Recruitment: Application status, interview scheduling, opportunities.</li>
                        <li>Regulatory: FMCSA/DOT compliance, safety reminders, drug and alcohol testing notifications.</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h3 className="text-lg font-black mb-3 text-white uppercase tracking-tight">Consent Requirement</h3>
                      <p className="text-white font-bold mb-3 italic">"We Will Never Contact You Without Your Permission"</p>
                      <p className="text-slate-400 text-sm">Gepard Trans Logistics INC will NEVER send you unsolicited text messages. We will only send SMS/text messages to you after you have provided your explicit opt-in consent.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-black mb-1.5 text-white uppercase tracking-widest text-[10px]">Frequency</h4>
                        <p className="text-slate-400 text-xs">Varies by interaction, typical 2-10 messages per month.</p>
                      </div>
                      <div>
                        <h4 className="font-black mb-1.5 text-white uppercase tracking-widest text-[10px]">Opt-Out</h4>
                        <p className="text-slate-400 text-xs">Reply STOP at any time to unsubscribe immediately.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Anti-Spam Commitment</h2>
                  <p>Gepard Trans Logistics INC is committed to responsible messaging practices. We strictly prohibit sending unsolicited commercial messages (spam), using deceptive subject lines, or sharing your contact information with third parties for marketing purposes.</p>
                </section>

                <section className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">User Responsibilities</h2>
                    <ul className="space-y-2 list-disc list-inside text-sm">
                      <li>Provide accurate and current information.</li>
                      <li>Maintain account credential confidentiality.</li>
                      <li>Use services only for lawful purposes.</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Prohibited Uses</h2>
                    <ul className="space-y-2 list-disc list-inside text-red-600/80 text-sm">
                      <li>Violating applicable laws or industry guidelines.</li>
                      <li>Transmitting unlawful or defamatory content.</li>
                      <li>Interfering with our networks or services.</li>
                    </ul>
                  </div>
                </section>

                <section className="border-t border-slate-100 pt-10">
                  <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Disclaimer & Liability</h2>
                  <p className="mb-4 uppercase text-[10px] font-black text-slate-400 tracking-widest">Warranties</p>
                  <p className="mb-8 text-sm">OUR SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT UNINTERRUPTED OR ERROR-FREE SERVICE.</p>

                  <p className="mb-4 uppercase text-[10px] font-black text-slate-400 tracking-widest">Limitation of Liability</p>
                  <p className="text-sm">TO THE MAXIMUM EXTENT PERMITTED BY LAW, Gepard Trans Logistics INC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF OUR SERVICES.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
