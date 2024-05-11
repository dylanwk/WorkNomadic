import ContactForm from '@/components/contact-form';
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-background">
      <section className="text-gray-900 pt-6 ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Vagaspace
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">
            Got a technical issue? Want to send feedback about our site? Need
            details about our Business plan? We are happy to hear from you!
          </p>
          <ContactForm />
        </div>
      </section>
      <div className="py-16"></div>
    </section>
  );
};

export default Contact;
