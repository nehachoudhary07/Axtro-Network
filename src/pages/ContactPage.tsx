import React, { useState } from 'react';
import { PageRoute, ContactFormData } from '../types';
import { Mail, Phone, MapPin, Network, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Sparkles, Radio } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const generatedTicket = `AXT-${Math.floor(100000 + Math.random() * 900000)}`;
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
    } catch (error) {
      setSubmitStatus('error');
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

  return (
    <div className="w-full transition-colors relative overflow-hidden bg-[#030507]">
      {/* HERO SECTION */}
      <section id="contact-hero" className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#245FA8] animate-pulse"></span>
              NOC & PROVISIONING INTAKE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F7FA] font-heading leading-tight">
              LET'S CONNECT<br />
              <span className="text-[#245FA8]">YOUR NETWORK.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A7B0BE] leading-relaxed max-w-2xl">
              Tell us what you need. Our network solutions team will configure your custom low-hop transit, DDoS mitigation, and cross-connect profile.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM SECTION */}
      <section id="contact-main" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Col: Contact Information (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07101C] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                  <Radio size={13} />
                  DIRECT CONTACT
                </div>
                <h2 className="text-2xl font-black text-[#F5F7FA] font-heading">
                  CARRIER CHANNELS
                </h2>
              </div>

              {/* Email Bento */}
              <div className="bento-card p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#245FA8]">
                  <Mail size={14} />
                  <span>EMAIL NOC</span>
                </div>
                <div className="text-base font-bold text-[#F5F7FA]">
                  <a href="mailto:support@axtro.network" className="hover:text-[#245FA8] transition-colors">
                    support@axtro.network
                  </a>
                </div>
                <p className="text-xs text-[#A7B0BE]">
                  General support, inquiries & cross-connect orders
                </p>
              </div>

              {/* Phone Bento */}
              <div className="bento-card p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#245FA8]">
                  <Phone size={14} />
                  <span>PHONE NOC</span>
                </div>
                <div className="text-base font-bold text-[#F5F7FA]">
                  <a href="tel:+918448440490" className="hover:text-[#245FA8] transition-colors">
                    +91 84484 40490
                  </a>
                </div>
                <p className="text-xs text-[#A7B0BE]">
                  24×7 Network Operations Center (NOC)
                </p>
              </div>

              {/* Location Bento */}
              <div className="bento-card p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#245FA8]">
                  <MapPin size={14} />
                  <span>PRIMARY CORE POP</span>
                </div>
                <div className="text-base font-bold text-[#F5F7FA]">
                  Yotta D1, 7th Floor
                </div>
                <p className="text-xs text-[#A7B0BE]">
                  Primary Northern India colocation facility
                </p>
              </div>

              {/* Network Presence Bento */}
              <div className="bento-card p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#245FA8]">
                  <Network size={14} />
                  <span>PEERING BACKBONE</span>
                </div>
                <div className="text-base font-bold text-[#F5F7FA]">
                  Connect IX
                </div>
                <p className="text-xs text-[#A7B0BE]">
                  Delhi • Mumbai • Chennai Fabric
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#07101C] border border-[#17263A] flex items-center gap-3 text-xs text-[#A7B0BE]">
                <ShieldCheck size={20} className="text-[#245FA8] shrink-0" />
                <span>All customer routing details and ASNs are protected under strict NDA policies.</span>
              </div>
            </div>

            {/* Right Col: Requirement Form (8 cols) */}
            <div className="lg:col-span-8">
              <div className="bg-[#07101C] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#17263A]">
                <div className="border-b border-[#17263A] pb-6 mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17263A] border border-[#17263A] text-[#245FA8] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                    <Sparkles size={13} />
                    CONNECTIVITY REQUIREMENT FORM
                  </div>
                  <h3 className="text-2xl font-black text-[#F5F7FA] font-heading">
                    SUBMIT INFRASTRUCTURE REQUIREMENT
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7B0BE] mt-1">
                    Complete the form below and an AXTRO NETWORKS solutions engineer will reach out to discuss topology, port capacity, and pricing.
                  </p>
                </div>

                {/* SUCCESS NOTIFICATION */}
                {submitStatus === 'success' && (
                  <div
                    id="form-success-banner"
                    className="p-8 rounded-2xl bg-[#164B8C]/20 border border-[#17263A] mb-8 space-y-3"
                  >
                    <div className="flex items-center gap-3 text-[#245FA8]">
                      <CheckCircle2 size={24} />
                      <div className="font-heading font-bold text-lg">
                        THANK YOU. YOUR REQUIREMENT HAS BEEN RECEIVED.
                      </div>
                    </div>
                    <p className="text-sm text-[#F5F7FA] pl-9">
                      Reference Ticket ID: <strong className="font-mono text-[#245FA8]">{ticketId}</strong>. Our carrier provisioning team will review your ASN and bandwidth parameters within 2 business hours.
                    </p>
                    <div className="pl-9 pt-2">
                      <button
                        onClick={() => {
                          setSubmitStatus('idle');
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
                        }}
                        className="text-xs font-bold font-heading uppercase text-[#245FA8] hover:text-[#F5F7FA] underline underline-offset-4"
                      >
                        Submit Another Requirement →
                      </button>
                    </div>
                  </div>
                )}

                {/* ERROR NOTIFICATION */}
                {submitStatus === 'error' && (
                  <div
                    id="form-error-banner"
                    className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 mb-6 flex items-center gap-3 text-sm text-red-300"
                  >
                    <AlertCircle size={20} className="text-red-400 shrink-0" />
                    <span>Something went wrong. Please try again or contact us directly at <a href="mailto:support@axtro.network" className="underline text-[#245FA8]">support@axtro.network</a>.</span>
                  </div>
                )}

                {/* THE ACTUAL FORM */}
                {submitStatus !== 'success' && (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] font-heading mb-2">
                          Full Name <span className="text-[#245FA8]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Alex Sharma"
                          className={`w-full px-4 py-3 bg-[#030507] border rounded-xl text-sm text-[#F5F7FA] placeholder-[#A7B0BE]/50 focus:outline-none transition-all ${
                            formErrors.fullName
                              ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                              : 'border-[#17263A] focus:border-[#245FA8] focus:ring-1 focus:ring-[#245FA8]'
                          }`}
                        />
                        {formErrors.fullName && (
                          <p className="mt-1 text-xs text-red-400">{formErrors.fullName}</p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div>
                        <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] font-heading mb-2">
                          Company Name <span className="text-[#245FA8]">*</span>
                        </label>
                        <input
                          id="companyName"
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g. Acme Cloud Corp"
                          className={`w-full px-4 py-3 bg-[#030507] border rounded-xl text-sm text-[#F5F7FA] placeholder-[#A7B0BE]/50 focus:outline-none transition-all ${
                            formErrors.companyName
                              ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                              : 'border-[#17263A] focus:border-[#245FA8] focus:ring-1 focus:ring-[#245FA8]'
                          }`}
                        />
                        {formErrors.companyName && (
                          <p className="mt-1 text-xs text-red-400">{formErrors.companyName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Business Email */}
                      <div>
                        <label htmlFor="businessEmail" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] font-heading mb-2">
                          Business Email <span className="text-[#245FA8]">*</span>
                        </label>
                        <input
                          id="businessEmail"
                          type="email"
                          name="businessEmail"
                          value={formData.businessEmail}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3 bg-[#030507] border rounded-xl text-sm text-[#F5F7FA] placeholder-[#A7B0BE]/50 focus:outline-none transition-all ${
                            formErrors.businessEmail
                              ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                              : 'border-[#17263A] focus:border-[#245FA8] focus:ring-1 focus:ring-[#245FA8]'
                          }`}
                        />
                        {formErrors.businessEmail && (
                          <p className="mt-1 text-xs text-red-400">{formErrors.businessEmail}</p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] font-heading mb-2">
                          Phone Number <span className="text-[#245FA8]">*</span>
                        </label>
                        <input
                          id="phoneNumber"
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3 bg-[#030507] border rounded-xl text-sm text-[#F5F7FA] placeholder-[#A7B0BE]/50 focus:outline-none transition-all ${
                            formErrors.phoneNumber
                              ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                              : 'border-[#17263A] focus:border-[#245FA8] focus:ring-1 focus:ring-[#245FA8]'
                          }`}
                        />
                        {formErrors.phoneNumber && (
                          <p className="mt-1 text-xs text-red-400">{formErrors.phoneNumber}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Service Required Dropdown */}
                      <div>
                        <label htmlFor="serviceRequired" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] font-heading mb-2">
                          Service Required
                        </label>
                        <select
                          id="serviceRequired"
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#030507] border border-[#17263A] focus:border-[#245FA8] rounded-xl text-sm text-[#F5F7FA] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="DDoS Protection">DDoS Protection</option>
                          <option value="IP Transit">IP Transit</option>
                          <option value="IX Connectivity">IX Connectivity</option>
                          <option value="Leased Lines">Leased Lines</option>
                          <option value="Other">Other / Custom Hybrid</option>
                        </select>
                      </div>

                      {/* Bandwidth Requirement */}
                      <div>
                        <label htmlFor="bandwidthRequirement" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] font-heading mb-2">
                          Bandwidth Requirement
                        </label>
                        <select
                          id="bandwidthRequirement"
                          name="bandwidthRequirement"
                          value={formData.bandwidthRequirement}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#030507] border border-[#17263A] focus:border-[#245FA8] rounded-xl text-sm text-[#F5F7FA] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="1 Gbps">1 Gbps</option>
                          <option value="10 Gbps">10 Gbps</option>
                          <option value="40 Gbps">40 Gbps</option>
                          <option value="100 Gbps">100 Gbps</option>
                          <option value="400 Gbps+">400 Gbps+</option>
                          <option value="Custom">Custom Sizing</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Current Location */}
                      <div>
                        <label htmlFor="currentLocation" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] font-heading mb-2">
                          Current Location / Data Center
                        </label>
                        <input
                          id="currentLocation"
                          type="text"
                          name="currentLocation"
                          value={formData.currentLocation}
                          onChange={handleInputChange}
                          placeholder="e.g. Delhi / Yotta D1 or Noida DC"
                          className="w-full px-4 py-3 bg-[#030507] border border-[#17263A] focus:border-[#245FA8] rounded-xl text-sm text-[#F5F7FA] placeholder-[#A7B0BE]/50 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Destination Location */}
                      <div>
                        <label htmlFor="destinationLocation" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] font-heading mb-2">
                          Destination Location <span className="text-[#A7B0BE] text-[10px] font-normal lowercase">(for leased lines)</span>
                        </label>
                        <input
                          id="destinationLocation"
                          type="text"
                          name="destinationLocation"
                          value={formData.destinationLocation}
                          onChange={handleInputChange}
                          placeholder="e.g. Mumbai Connect IX / Branch HQ"
                          className="w-full px-4 py-3 bg-[#030507] border border-[#17263A] focus:border-[#245FA8] rounded-xl text-sm text-[#F5F7FA] placeholder-[#A7B0BE]/50 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* ASN / Network Details */}
                    <div>
                      <label htmlFor="asnDetails" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] font-heading mb-2">
                        ASN / Network Details <span className="text-[#A7B0BE] text-[10px] font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="asnDetails"
                        type="text"
                        name="asnDetails"
                        value={formData.asnDetails}
                        onChange={handleInputChange}
                        placeholder="e.g. AS12345 / /24 IPv4 prefix"
                        className="w-full px-4 py-3 bg-[#030507] border border-[#17263A] focus:border-[#245FA8] rounded-xl text-sm text-[#F5F7FA] placeholder-[#A7B0BE]/50 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message / Requirement Details */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] font-heading mb-2">
                        Message / Requirement Details <span className="text-[#245FA8]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your specific network requirements, timelines, and interface specs..."
                        className={`w-full px-4 py-3 bg-[#030507] border rounded-xl text-sm text-[#F5F7FA] placeholder-[#A7B0BE]/50 focus:outline-none transition-all ${
                          formErrors.message
                            ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                            : 'border-[#17263A] focus:border-[#245FA8] focus:ring-1 focus:ring-[#245FA8]'
                        }`}
                      ></textarea>
                      {formErrors.message && (
                        <p className="mt-1 text-xs text-red-400">{formErrors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        id="contact-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-xs font-bold uppercase tracking-wider text-white btn-primary-glow rounded-full shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>PROCESSING INTAKE...</span>
                          </>
                        ) : (
                          <>
                            <span>SUBMIT REQUIREMENT</span>
                            <Send size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
