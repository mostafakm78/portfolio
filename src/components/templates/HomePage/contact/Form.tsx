'use client';

import { useState } from 'react';
import { Input, Button, Textarea, Alert, Form } from '@heroui/react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function FormContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (!formData.message || !formData.name || !formData.email) {
      setAlertMessage('وارد کردن همه فیلدها اجباری می‌باشد.');
      setAlertType('error');
      setIsSubmitting(false);

      setTimeout(() => setAlertMessage(null), 3000);
      return;
    }
    if (formData.name.length < 3) {
      setAlertMessage('تعداد کاراکترهای نام باید بیشتر از 3 باشد.');
      setAlertType('error');
      setIsSubmitting(false);

      setTimeout(() => setAlertMessage(null), 3000);
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setAlertMessage('فرمت ایمیل اشتباه است.');
      setAlertType('error');
      setIsSubmitting(false);

      setTimeout(() => setAlertMessage(null), 3000);
      return;
    }
    if (formData.message.length < 30) {
      return (
        setAlertMessage('تعداد کاراکترهای پیام شما باید بیشتر از 30 باشد.'),
        setAlertType('error'),
        setIsSubmitting(false)
      );
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          message: 'خطای ناشناخته',
        }));
        setAlertMessage(errorData.message);
        setAlertType('error');
        return;
      }

      setFormData({ name: '', email: '', message: '' });
      setAlertMessage('پیام ارسال شد!');
      setAlertType('success');
      setIsSubmitting(false);
      setTimeout(() => setAlertMessage(null), 3000);
      return;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsSubmitting(false);
      setAlertMessage('خطا در ارسال پیام.');
      setAlertType('error');
      setTimeout(() => setAlertMessage(null), 3000);
      return;
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="space-y-4 text-xl w-full flex flex-col justify-center rounded-md items-center p-6 lg:mr-24 max-w-lg"
      >
        {alertMessage && (
          <Alert
            radius="md"
            hideIcon
            color={alertType === 'success' ? 'success' : 'danger'}
            description={alertMessage}
            variant="solid"
            onClose={() => setAlertMessage(null)}
          />
        )}
        <Input
          name="name"
          value={formData.name}
          onValueChange={handleInputChange('name')}
          color="primary"
          classNames={{
            base: 'text-back dark:text-fore',
            label: 'text-back dark:text-fore text-lg',
            inputWrapper: 'text-lg',
          }}
          label="نام"
          type="text"
          variant="bordered"
          isRequired
        />
        <Input
          name="email"
          value={formData.email}
          onValueChange={handleInputChange('email')}
          classNames={{
            base: 'text-back dark:text-fore',
            label: 'text-back dark:text-fore text-lg',
            inputWrapper: 'text-lg',
          }}
          label="ایمیل"
          type="email"
          color="primary"
          variant="bordered"
          isRequired
        />
        <Textarea
          name="message"
          value={formData.message}
          onValueChange={handleInputChange('message')}
          color="primary"
          classNames={{
            base: 'text-back dark:text-fore',
            label: 'text-back dark:text-fore text-lg',
            inputWrapper: 'text-lg',
          }}
          label="پیام شما"
          variant="bordered"
          isRequired
        />
        <Button
          type="submit"
          radius="md"
          variant="bordered"
          className="w-40 bg-transparen text-back dark:text-fore hover:text-blue-700 dark:hover:text-blue-700 hover:border-blue-700 duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'در حال ارسال...' : 'ارسال'}
        </Button>
      </Form>
    </>
  );
}
