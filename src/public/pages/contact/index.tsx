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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">{t('CONTACT.TITLE')}</h1>
      <form className="max-w-md mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        {success && <p className="text-green-500 p-2 text-center">{t('CONTACT.SUCCESS_MESSAGE')}</p>}
        {error && <p className="text-red-500 p-2 text-center">{error}</p>}

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            {t('CONTACT.NAME_LABEL')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            {t('CONTACT.EMAIL_LABEL')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
            {t('CONTACT.MESSAGE_LABEL')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            disabled={loading}
            type="submit"
            className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition duration-200 ${
              loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {loading ? t('CONTACT.SENDING_BUTTON') : t('CONTACT.SEND_BUTTON')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
