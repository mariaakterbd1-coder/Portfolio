import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { contactInfo, personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate mailto link with entered subject and message
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Message from ${formState.name} via Portfolio`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  const contactCards = [
    {
      id: 'email',
      title: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
      accent: 'from-purple-500/20 to-indigo-500/20',
      borderAccent: 'hover:border-purple-500/40',
      actionLabel: 'Send an Email',
      canCopy: true
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      value: contactInfo.whatsappNumber,
      href: contactInfo.whatsappUrl,
      icon: WhatsappIcon,
      accent: 'from-emerald-500/20 to-teal-500/20',
      borderAccent: 'hover:border-emerald-500/40',
      actionLabel: 'Chat on WhatsApp'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: contactInfo.linkedinUrl,
      icon: LinkedinIcon,
      accent: 'from-blue-500/20 to-cyan-500/20',
      borderAccent: 'hover:border-blue-500/40',
      actionLabel: 'View Profile'
    },
    {
      id: 'github',
      title: 'GitHub',
      value: 'Follow & View Repos',
      href: contactInfo.githubUrl,
      icon: GithubIcon,
      accent: 'from-slate-500/20 to-purple-500/20',
      borderAccent: 'hover:border-purple-500/40',
      actionLabel: 'View GitHub'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {contactInfo.heading}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            {contactInfo.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Cards Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
              <div className="flex items-center gap-2 text-xs text-purple-300 font-medium mb-1">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Location: {contactInfo.location}</span>
              </div>
              <p className="text-xs text-slate-400">
                {contactInfo.availabilityText}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`rounded-2xl p-5 bg-[#0d0f17]/90 border border-white/10 ${card.borderAccent} transition-all duration-300 shadow-lg group`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className={`p-3 rounded-xl bg-gradient-to-tr ${card.accent} border border-white/10 text-white`}>
                          <Icon className="w-5 h-5 text-purple-200" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white">
                            {card.title}
                          </h3>
                          <span className="text-xs text-slate-400 font-mono block truncate max-w-[180px]">
                            {card.value}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {card.canCopy && (
                          <button
                            type="button"
                            onClick={handleCopyEmail}
                            title="Copy Email"
                            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          >
                            {copied ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        )}

                        <a
                          href={card.href}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-purple-600/10 hover:bg-purple-600 text-purple-300 hover:text-white transition-all cursor-pointer"
                          title={card.actionLabel}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#0d0f17]/90 border border-white/10 shadow-2xl shadow-purple-950/20">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out the form below to initiate an email directly to Maria.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Project Collaboration / Question"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-purple-900/30 hover:shadow-purple-700/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {formSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs text-center">
                  Thank you! Your email client has been launched with your message pre-filled.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
