import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Github, Linkedin, Leetcode } from '../components/BrandIcons';
import emailjs from '@emailjs/browser';
import { SectionContainer } from '../components/SectionContainer';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    // EmailJS credentials configuration
    // Replace these placeholder strings with your actual EmailJS credentials
    const SERVICE_ID = 'service_portfolio'; // Replace with your Service ID
    const TEMPLATE_ID = 'template_portfolio'; // Replace with your Template ID
    const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your Public Key

    if (PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
      // Mock mode for local testing if credentials are not yet customized by the user
      setTimeout(() => {
        setStatus('success');
        setStatusMessage('Thank you! Your message was submitted successfully (Mock Mode). Configure EmailJS variables in Contact.tsx to receive emails.');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus('success');
          setStatusMessage('Your message has been sent successfully! I will get back to you shortly.');
          setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
          setStatusMessage('Oops! Something went wrong while sending. Please try emailing me directly.');
        }
      );
  };

  return (
    <SectionContainer id="contact" title="Get In Touch" subtitle="Let's Connect">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
        
        {/* Left Column: Contact details */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h3 className="text-xl font-bold font-outfit text-portfolioText mb-3">
              Let's build something awesome together!
            </h3>
            <p className="text-sm sm:text-base text-portfolioTextSecondary leading-relaxed font-light">
              I am open to Software Engineer Trainee, Full-Stack Developer, and junior MERN Stack positions. Feel free to reach out if you have opportunities, want to collaborate, or just connect.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-portfolioCard border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-portfolioPrimary/10 flex items-center justify-center text-portfolioPrimary flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-portfolioTextSecondary font-medium uppercase">Direct Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-portfolioText hover:text-portfolioPrimary transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-portfolioCard border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-portfolioSecondary/10 flex items-center justify-center text-portfolioSecondary flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-portfolioTextSecondary font-medium uppercase">Location</p>
                <p className="text-sm font-semibold text-portfolioText">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-portfolioText uppercase mb-4">
              Connect on socials
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#1E293B] border border-white/5 flex items-center justify-center text-portfolioTextSecondary hover:text-portfolioPrimary hover:border-portfolioPrimary hover:bg-portfolioPrimary/10 transition-all hover:-translate-y-1"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#1E293B] border border-white/5 flex items-center justify-center text-portfolioTextSecondary hover:text-portfolioPrimary hover:border-portfolioPrimary hover:bg-portfolioPrimary/10 transition-all hover:-translate-y-1"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#1E293B] border border-white/5 flex items-center justify-center text-portfolioTextSecondary hover:text-portfolioPrimary hover:border-portfolioPrimary hover:bg-portfolioPrimary/10 transition-all hover:-translate-y-1"
                title="LeetCode"
              >
                <Leetcode size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="lg:col-span-7">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-portfolioCard border border-white/5 space-y-4 shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="user_name" className="text-xs font-semibold text-portfolioTextSecondary uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg bg-portfolioBg border border-white/10 hover:border-white/20 focus:border-portfolioPrimary focus:outline-none text-portfolioText text-sm transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="user_email" className="text-xs font-semibold text-portfolioTextSecondary uppercase">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-portfolioBg border border-white/10 hover:border-white/20 focus:border-portfolioPrimary focus:outline-none text-portfolioText text-sm transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-semibold text-portfolioTextSecondary uppercase">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration Opportunity"
                className="w-full px-4 py-2.5 rounded-lg bg-portfolioBg border border-white/10 hover:border-white/20 focus:border-portfolioPrimary focus:outline-none text-portfolioText text-sm transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-portfolioTextSecondary uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Manush, I would like to discuss..."
                className="w-full px-4 py-2.5 rounded-lg bg-portfolioBg border border-white/10 hover:border-white/20 focus:border-portfolioPrimary focus:outline-none text-portfolioText text-sm resize-none transition-colors"
              />
            </div>

            {/* Submission Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-portfolioPrimary to-portfolioSecondary text-portfolioBg font-bold shadow-md hover:scale-[1.01] hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-portfolioBg border-t-transparent rounded-full animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {/* Success / Error notification */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-sm flex items-start gap-2.5"
              >
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>{statusMessage}</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm flex items-start gap-2.5"
              >
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>{statusMessage}</span>
              </motion.div>
            )}
          </form>
        </div>

      </div>
    </SectionContainer>
  );
};
