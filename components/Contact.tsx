'use client';

import { useState } from 'react';
import en from '@/locales/en/common.json';
import tr from '@/locales/tr/common.json';

interface ContactProps {
  language: string;
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const t = language === 'en' ? en : tr;
  const contact = language === 'en' ? en.contact : tr.contact;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (in production, send to your backend)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(to bottom, white, rgba(0, 0, 128, 0.05), rgba(0, 0, 128, 0.1))' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#000080' }}>
            {t.contact_form.title}
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-6" style={{ background: '#FF8C00' }}></div>
          <p className="text-lg text-gray-600">
            {t.contact_form.description}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-slideInLeft">
          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all border-2 group"
            style={{ borderColor: 'rgba(0, 0, 128, 0.1)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FF8C00')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 0, 128, 0.1)')}
          >
            <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
              ✉️
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#000080' }}>
              {language === 'en' ? 'Email' : 'E-posta'}
            </h3>
            <p className="text-gray-600 group-hover:transition-colors" style={{ borderColor: 'rgba(0, 0, 128, 0.1)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FF8C00')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgb(75, 85, 99)')}>
              {contact.email}
            </p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${contact.phone}`}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all border-2 group"
            style={{ borderColor: 'rgba(0, 0, 128, 0.1)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FF8C00')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 0, 128, 0.1)')}
          >
            <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
              📱
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#000080' }}>
              {language === 'en' ? 'Phone' : 'Telefon'}
            </h3>
            <p className="text-gray-600">
              {contact.phone}
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all border-2 group"
            style={{ borderColor: 'rgba(0, 0, 128, 0.1)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FF8C00')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 0, 128, 0.1)')}
          >
            <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
              💼
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#000080' }}>
              LinkedIn
            </h3>
            <p className="text-gray-600">
              {language === 'en' ? 'Connect with me' : 'Benimle bağlantı kurun'}
            </p>
          </a>

          {/* Company */}
          <a
            href={`https://${contact.company}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all border-2 group"
            style={{ borderColor: 'rgba(0, 0, 128, 0.1)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FF8C00')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 0, 128, 0.1)')}
          >
            <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
              🌐
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#000080' }}>
              {language === 'en' ? 'Company' : 'Şirket'}
            </h3>
            <p className="text-gray-600">
              NetCoN Technologies
            </p>
          </a>
        </div>

        {/* Contact Form */}
        <div 
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border-2 animate-slideInRight"
          style={{ borderColor: 'rgba(0, 0, 128, 0.1)' }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
                style={{ color: '#000080' }}
              >
                {t.contact_form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                style={{ borderColor: 'rgba(0, 0, 128, 0.2)' }}
                onFocus={(e) => (e.target.style.borderColor = '#FF8C00')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 0, 128, 0.2)')}
                placeholder={language === 'en' ? 'Your name' : 'Adınız'}
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
                style={{ color: '#000080' }}
              >
                {t.contact_form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                style={{ borderColor: 'rgba(0, 0, 128, 0.2)' }}
                onFocus={(e) => (e.target.style.borderColor = '#FF8C00')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 0, 128, 0.2)')}
                placeholder={language === 'en' ? 'Your email' : 'E-posta adresiniz'}
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
                style={{ color: '#000080' }}
              >
                {t.contact_form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none"
                style={{ borderColor: 'rgba(0, 0, 128, 0.2)' }}
                onFocus={(e) => (e.target.style.borderColor = '#FF8C00')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 0, 128, 0.2)')}
                placeholder={language === 'en' ? 'Your message...' : 'Mesajınız...'}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: '#FF8C00' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#000080')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#FF8C00')}
              >
                {isSubmitting
                  ? t.contact_form.sending
                  : t.contact_form.send}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-lg font-semibold flex items-center gap-2" style={{ background: '#dcfce7', color: '#166534' }}>
                <span>✓</span>
                {t.contact_form.success}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg font-semibold flex items-center gap-2" style={{ background: '#fee2e2', color: '#991b1b' }}>
                <span>✕</span>
                {t.contact_form.error}
              </div>
            )}
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fadeInUp">
          <p className="text-gray-600 text-lg">
            {language === 'en'
              ? 'I typically respond within 24 hours. Looking forward to hearing from you!'
              : '24 saat içinde yanıt vermeye özen gösteririm. Sizden duymak için sabırsızlanıyorum!'}
          </p>
        </div>
      </div>
    </section>
  );
}
