import { addContact } from 'public/shared/service/contact.service';
import { sendEmail } from 'public/shared/utils';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    try {
      setLoading(true);
      await addContact({
        ...formData,
        timestamp: new Date()
      });
      setSuccess(true);

      // Envoi de l'email
      await sendEmail(formData.email, formData.message, formData.name);

      setFormData({ name: '', email: '', message: '' });
    } catch {
      setError(t('CONTACT.ERROR_MESSAGE'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-6 text-gray-100">
      <h1
        className="text-6xl font-semibold mb-4 text-blue-300"
        style={{ fontFamily: '"Montserrat", serif', fontWeight: 900 }}
      >
        {t('CONTACT.TITLE')}
      </h1>
      <form className="max-w-[700px] mx-auto shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        {success && <p className="text-green-300 p-2 text-center">{t('CONTACT.SUCCESS_MESSAGE')}</p>}
        {error && <p className="text-red-400 p-2 text-center">{error}</p>}

        <div className="mb-6">
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-4 px-4 text-xl bg-transparent border border-blue-700 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-blue-400 focus:border-blue-500 focus:outline-none transition duration-200"
            required
            placeholder={t('CONTACT.NAME_LABEL')}
          />
        </div>

        <div className="mb-6">
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-4 px-4 text-xl bg-transparent border border-blue-700 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-blue-400 focus:border-blue-500 focus:outline-none transition duration-200"
            required
            placeholder={t('CONTACT.EMAIL_LABEL')}
          />
        </div>

        <div className="mb-6">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full py-4 px-4 text-xl bg-transparent border border-blue-700 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-blue-400 focus:border-blue-500 focus:outline-none transition duration-200"
            required
            placeholder={t('CONTACT.MESSAGE_LABEL')}
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            disabled={loading}
            type="submit"
            className={`relative w-full py-3 px-6 text-xl font-semibold rounded-lg overflow-hidden transition duration-300 ${
              loading ? 'bg-blue-700 text-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-blue-100'
            }`}
            style={{
              boxShadow: '0 0 15px rgba(0, 123, 255, 0.5), 0 0 30px rgba(0, 123, 255, 0.3)',
              border: '2px solid rgba(0, 123, 255, 0.6)'
            }}
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 opacity-50 blur-lg rounded-lg"
              aria-hidden="true"
            ></span>
            <span className="relative z-10">{loading ? t('CONTACT.SENDING_BUTTON') : t('CONTACT.SEND_BUTTON')}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
