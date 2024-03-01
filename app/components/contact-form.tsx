'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/lib/actions/send-email';
import { useToast } from '@/components/ui/use-toast';

export type FormData = {
  email: string;
  name: string;
  message: string;
};

const Contact: FC = () => {
  const { toast } = useToast();

  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
    return(
      toast({
        description: "Your message has been sent.",
      })
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
          placeholder="Full Name"
          {...register('name', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium ">
          Your Email
        </label>
        <input
          type="email"
          id="subject"
          className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="example@domain.com"
          {...register('email', { required: true })}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Your Message
        </label>
        <textarea
          rows={4}
          className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave a comment..."
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-gray-700 text-white sm:w-fit hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300"
      >
        Send message
      </button>
    </form>
  );
};

export default Contact;
