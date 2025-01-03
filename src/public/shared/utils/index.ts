import emailjs from 'emailjs-com';

export const sendEmail = async (email: string, message: string, nom: string) => {
  try {
    const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAIL_JS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      throw new Error('EmailJS configuration variables are missing.');
    }

    const response = await emailjs.send(serviceId, templateId, { email, message, nom }, userId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
