import React, { useState } from 'react';
import { PageRoute, ContactFormData } from '../types';
import { MapPin, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Sparkles, Radio } from '../components/animated-icons';

interface ContactPageProps {
  navigate: (route: PageRoute) => void;
}

export function ContactPage({ navigate }: ContactPageProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    serviceRequired: 'DDoS Protection',
    bandwidthRequirement: '10 Gbps',
    currentLocation: '',
    destinationLocation: '',
    asnDetails: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [ticketId, setTicketId] = useState('');

  const validate = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    }

    if (!formData.companyName.trim()) {
      errors.companyName = 'Company name is required.';
    }

    if (!formData.businessEmail.trim()) {
      errors.businessEmail = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errors.businessEmail = 'Please enter a valid business email address.';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please provide details about your connectivity requirement.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      businessEmail: '',
      phoneNumber: '',
      serviceRequired: 'DDoS Protection',
      bandwidthRequirement: '10 Gbps',
      currentLocation: '',
      destinationLocation: '',
      asnDetails: '',
      message: '',
    });
    setFormErrors({});
    setSubmitStatus('idle');
    setErrorMessage('');
    setTicketId('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const generatedTicket = `AXT-${Math.floor(100000 + Math.random() * 900000)}`;
    const accessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim();

    try {
      if (accessKey && !accessKey.startsWith('YOUR_')) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `AXTRO NOC: New Requirement Proposal [${generatedTicket}] - ${formData.companyName}`,
            from_name: 'AXTRO Networks NOC Intake',
            ticket_id: generatedTicket,
            name: formData.fullName,
            company: formData.companyName,
            email: formData.businessEmail,
            phone: formData.phoneNumber,
            service_required: formData.serviceRequired,
            bandwidth_capacity: formData.bandwidthRequirement,
            technical_scope: formData.message,
            submitted_at: new Date().toUTCString(),
            page_url: window.location.href,
          }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Failed to submit proposal via Web3Forms.');
        }
      } else {
        // Safe simulated delivery in local preview mode until key is configured
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.info(
          'ℹ️ [AXTRO Web3Forms]: Simulation mode active. Set VITE_WEB3FORMS_ACCESS_KEY in your .env file to enable live email delivery to your inbox.'
        );
      }

      setTicketId(generatedTicket);
      setSubmitStatus('success');

      try {
        const existing = JSON.parse(localStorage.getItem('axtro_requirements') || '[]');
        existing.push({
          ticketId: generatedTicket,
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('axtro_requirements', JSON.stringify(existing));
      } catch (err) {
        // Safe fallback
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error?.message || 'Transmission failed. Please check your network or reach our NOC engineers directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const popContacts = [
    {
      city: 'Delhi NCR (Core MMR Hub)',
      facility: 'Yotta D1 • 7th Floor Data Suite, Greater Noida',
      email: 'delhi-noc@axtronetworks.com',
      asn: 'AS-AXTRO (Delhi RR-01)',
      specs: '100G MMR Cross-Connects',
    },
    {
      city: 'Mumbai Gateway (West Coast)',
      facility: 'Connect IX • Subsea Landing Zone, Prabhadevi',
      email: 'mumbai-noc@axtronetworks.com',
      asn: 'AS-AXTRO (Mumbai Gateway)',
      specs: 'Subsea Transit & IX Port',
    },
    {
      city: 'Chennai Corridor (East Coast)',
      facility: 'Connect IX • Bay of Bengal Landing, Ambattur',
      email: 'chennai-noc@axtronetworks.com',
      asn: 'AS-AXTRO (Chennai East)',
      specs: 'APAC Trunk & IX Port',
    },
  ];

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#0E0B1A]">
      {/* HERO SECTION */}
      <section id="contact-hero" className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17132A] border border-[#2C2645] text-[#DB2777] text-xs font-mono font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              24×7 DIRECT NOC ACCESS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F3FA] font-heading leading-tight">
              CONNECT WITH OUR<br />
              <span className="text-[#DB2777]">NETWORK ENGINEERS.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9C94B8] leading-relaxed max-w-2xl">
              Initiate a direct interconnect proposal, provision IP transit / Leased Lines, or configure emergency AI edge DDoS mitigation. Response time strictly under 5 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* FORM & DIRECT NOC SPLIT */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Proposal Form */}
            <div className="lg:col-span-7 bg-[#17132A] border border-[#2C2645] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#2C2645]">
                <div>
                  <h2 className="text-2xl font-black font-heading text-[#F5F3FA]">
                    Technical Requirement Form
                  </h2>
                  <p className="text-xs text-[#9C94B8] mt-1">
                    Direct intake to Tier-3 NOC Operators
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1938] border border-[#2C2645] text-xs font-mono text-[#DB2777]">
                  <Radio size={12} className="animate-pulse" />
                  <span>NOC LIVE</span>
                </div>
              </div>

              {submitStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-[#0E0B1A] border border-[#DB2777] text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-14 h-14 rounded-full bg-[#DB2777]/20 border border-[#DB2777] mx-auto flex items-center justify-center text-[#DB2777]">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="text-2xl font-black font-heading text-[#F5F3FA]">
                    Requirement Submitted
                  </h3>
                  <p className="text-sm text-[#9C94B8] max-w-md mx-auto">
                    Your connectivity request has been logged into the AXTRO NOC queuing system. A senior network architect will contact you within 5 minutes.
                  </p>
                  <div className="inline-block p-3 rounded-xl bg-[#17132A] border border-[#2C2645] font-mono text-sm">
                    <span className="text-[#9C94B8]">Reference Ticket ID: </span>
                    <span className="text-[#DB2777] font-bold">{ticketId}</span>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#DB2777] rounded-full cursor-pointer hover:bg-[#be185d] transition-colors"
                    >
                      SUBMIT ANOTHER PROPOSAL
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Invisible honeypot field for bot protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  {/* Submission Error Banner */}
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-[#F5F3FA] flex items-start gap-3 animate-in fade-in">
                      <AlertCircle size={18} className="text-[#DB2777] shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-bold text-red-300">Transmission Interrupted</p>
                        <p className="text-[#9C94B8]">{errorMessage}</p>
                        <p className="text-[11px] text-[#9C94B8] pt-1">
                          You can also reach our 24/7 engineers directly at{' '}
                          <a href="mailto:peering@axtronetworks.com" className="text-[#DB2777] underline">
                            peering@axtronetworks.com
                          </a>{' '}
                          or call{' '}
                          <span className="text-[#F5F3FA] font-bold">+91 (11) 4988-AXTRO</span>.
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#9C94B8] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E0B1A] border border-[#2C2645] text-[#F5F3FA] text-sm focus:border-[#DB2777] focus:outline-none transition-colors"
                      />
                      {formErrors.fullName && (
                        <p className="text-xs text-[#DB2777] mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle size={12} /> {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-[#9C94B8] uppercase tracking-wider mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Cloud Corp"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E0B1A] border border-[#2C2645] text-[#F5F3FA] text-sm focus:border-[#DB2777] focus:outline-none transition-colors"
                      />
                      {formErrors.companyName && (
                        <p className="text-xs text-[#DB2777] mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle size={12} /> {formErrors.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#9C94B8] uppercase tracking-wider mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        placeholder="r.sharma@acme.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E0B1A] border border-[#2C2645] text-[#F5F3FA] text-sm focus:border-[#DB2777] focus:outline-none transition-colors"
                      />
                      {formErrors.businessEmail && (
                        <p className="text-xs text-[#DB2777] mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle size={12} /> {formErrors.businessEmail}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-[#9C94B8] uppercase tracking-wider mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E0B1A] border border-[#2C2645] text-[#F5F3FA] text-sm focus:border-[#DB2777] focus:outline-none transition-colors"
                      />
                      {formErrors.phoneNumber && (
                        <p className="text-xs text-[#DB2777] mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle size={12} /> {formErrors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#9C94B8] uppercase tracking-wider mb-2">
                        Required Service
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0E0B1A] border border-[#2C2645] text-[#F5F3FA] text-sm focus:border-[#DB2777] focus:outline-none transition-colors"
                      >
                        <option value="DDoS Protection">AI Edge DDoS Protection</option>
                        <option value="IP Transit">Carrier-Grade IP Transit</option>
                        <option value="IX Connectivity">Connect IX Interconnection</option>
                        <option value="Leased Lines">Point-to-Point Dark Fiber</option>
                        <option value="Multi-Service">Custom Multi-Service Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-[#9C94B8] uppercase tracking-wider mb-2">
                        Bandwidth Capacity
                      </label>
                      <select
                        name="bandwidthRequirement"
                        value={formData.bandwidthRequirement}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0E0B1A] border border-[#2C2645] text-[#F5F3FA] text-sm focus:border-[#DB2777] focus:outline-none transition-colors"
                      >
                        <option value="1 Gbps - 10 Gbps">1 Gbps - 10 Gbps</option>
                        <option value="10 Gbps">10 Gbps Committed</option>
                        <option value="40 Gbps - 100 Gbps">40 Gbps - 100 Gbps</option>
                        <option value="400 Gbps+">400 Gbps+ Wholesale</option>
                        <option value="Dark Fiber">Unlit Dark Fiber Lambda</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#9C94B8] uppercase tracking-wider mb-2">
                      Technical Scope & Locations *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Specify your POP location (Delhi Yotta, Mumbai Connect IX, Chennai), ASN number if applicable, or expected traffic pattern..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0E0B1A] border border-[#2C2645] text-[#F5F3FA] text-sm focus:border-[#DB2777] focus:outline-none transition-colors"
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-xs text-[#DB2777] mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle size={12} /> {formErrors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full font-heading text-xs font-bold uppercase tracking-wider text-white btn-primary-glow shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Transmitting to NOC queue...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT PROPOSAL TO NOC</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: POP Contacts & Surveillance Telemetry */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#17132A] border border-[#2C2645] space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#2C2645]">
                  <div className="w-10 h-10 rounded-xl bg-[#DB2777]/10 border border-[#DB2777]/30 flex items-center justify-center text-[#DB2777]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-[#F5F3FA]">
                      Direct NOC Hotlines
                    </h3>
                    <p className="text-xs text-[#9C94B8]">
                      Instant Level-3 Network Engineer Escalations
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {popContacts.map((pop) => (
                    <div
                      key={pop.city}
                      className="p-4 rounded-2xl bg-[#0E0B1A] border border-[#2C2645] hover:border-[#DB2777] transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-sm text-[#F5F3FA]">
                          {pop.city}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#DB2777] animate-pulse"></span>
                      </div>
                      <p className="text-xs text-[#9C94B8] flex items-center gap-1.5">
                        <MapPin size={12} className="text-[#DB2777] shrink-0" />
                        <span>{pop.facility}</span>
                      </p>
                      <div className="pt-2 border-t border-[#2C2645] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#9C94B8]">
                        <span className="text-[#DB2777]">{pop.specs}</span>
                        <span>{pop.asn}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#1F1938] border border-[#2C2645] text-xs font-mono space-y-2">
                  <div className="flex justify-between text-[#9C94B8]">
                    <span>Emergency DDoS Line:</span>
                    <span className="text-[#F5F3FA] font-bold">+91 (11) 4988-AXTRO</span>
                  </div>
                  <div className="flex justify-between text-[#9C94B8]">
                    <span>Global Peering Contact:</span>
                    <span className="text-[#DB2777] font-bold">peering@axtronetworks.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
