import { FormData } from '@/components/contact-form';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data)
  }).catch((err) => {
    alert(err);
  });
}
