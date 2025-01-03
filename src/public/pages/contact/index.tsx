import { addContact } from 'public/shared/service/contact.service';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    try {
      setLoading(true);
      await addContact({
        name,
        email,
        message,
        timestamp: new Date()
      });
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(t('CONTACT.ERROR_MESSAGE'));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">{t('CONTACT.TITLE')}</h1>
      <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        {success && <p className="text-green-500 p-1">{t('CONTACT.SUCCESS_MESSAGE')}</p>}
        {error && <p className="text-red-500 p-1">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            {t('CONTACT.NAME_LABEL')}
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            {t('CONTACT.EMAIL_LABEL')}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            {t('CONTACT.MESSAGE_LABEL')}
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={loading}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {t('CONTACT.SEND_BUTTON')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
