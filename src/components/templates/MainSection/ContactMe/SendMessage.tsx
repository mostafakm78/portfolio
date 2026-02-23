'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroupAddon, InputGroupText } from '@/components/ui/input-group';
import { useLocale, useTranslations } from 'next-intl';
import { Textarea } from '@/components/ui/textarea';
import { Spinner } from '@/components/ui/spinner';
import useToast from '@/hooks/useToast';

export function SendMessage() {
  const locale = useLocale();
  const t = useTranslations('Contact');
  const toast = useToast();

  const FullNameMsgMin = locale === 'fa' ? 'نام کامل باید حداقل ۵ کاراکتر باشد.' : 'Full Name must be at least 5 characters.';

  const FullNameMsgMax = locale === 'fa' ? 'نام کامل باید حداکثر ۳۲ کاراکتر باشد.' : 'Full Name must be at most 32 characters.';

  const EmailMsg = locale === 'fa' ? 'لطفاً یک آدرس ایمیل معتبر وارد کنید.' : 'Please enter a valid email address.';

  const DescriptionMsgMin = locale === 'fa' ? 'توضیحات باید حداقل ۲۰ کاراکتر باشد.' : 'Description must be at least 20 characters.';

  const DescriptionMsgMax = locale === 'fa' ? 'توضیحات باید حداکثر ۱۰۰ کاراکتر باشد.' : 'Description must be at most 100 characters.';

  const formSchema = z.object({
    name: z.string().min(5, FullNameMsgMin).max(32, FullNameMsgMax),

    email: z.email({ message: EmailMsg }),

    description: z.string().min(20, DescriptionMsgMin).max(100, DescriptionMsgMax),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      description: '',
    },
  });

  const {
    formState: { isSubmitting, isValid },
  } = form;

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const res = await fetch(new URL('/api/sendEmail', location.origin).toString(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast({
          message: locale === 'fa' ? 'پیام شما با موفقیت ارسال شد ✅' : 'Your message was sent successfully ✅',
          bg: 'bg-secondary',
        });
        form.reset();
      } else {
        toast({
          message: locale === 'fa' ? 'خطا در ارسال پیام' : 'Failed to send the message',
          bg: 'bg-secondary',
        });
      }
    } catch (error: any) {
      toast({
        message: locale === 'fa' ? error.message || 'خطا در ارسال پیام' : error.message || 'An error occurred while sending the message',
        bg: 'bg-red-500',
      });
    }
  }

  return (
    <form dir={locale === 'fa' ? 'rtl' : 'ltr'} className="w-full h-full flex flex-col justify-around" id="sendms" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="space-y-4 mt-4 md:mt-0 md:space-y-0">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => {
            const showError = fieldState.isTouched && fieldState.invalid;
            const showValid = fieldState.isTouched && !fieldState.invalid;

            return (
              <Field data-invalid={showError} className="relative">
                <div className="relative mt-2">
                  <Input
                    {...field}
                    id="sendms-name"
                    placeholder=""
                    type="text"
                    autoComplete="off"
                    aria-invalid={showError}
                    className={['peer py-5 text-foreground', showError ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/30' : '', showValid ? 'border-primary focus-visible:border-primary focus-visible:ring-primary/30' : ''].join(' ')}
                  />

                  <label
                    htmlFor="sendms-name"
                    className={`absolute ${locale === 'fa' ? 'right-3' : 'left-3'} top-2 text-base text-muted-foreground transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm`}
                  >
                    {t('name')}
                  </label>
                </div>

                {showError && <FieldError errors={[fieldState.error]} />}
              </Field>
            );
          }}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => {
            const showError = fieldState.isTouched && fieldState.invalid;
            const showValid = fieldState.isTouched && !fieldState.invalid;

            return (
              <Field data-invalid={showError} className="relative">
                <div className="relative mt-2">
                  <Input
                    {...field}
                    id="sendms-email"
                    placeholder=""
                    type="email"
                    autoComplete="off"
                    aria-invalid={showError}
                    className={['peer py-5 text-foreground', showError ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/30' : '', showValid ? 'border-primary focus-visible:border-primary focus-visible:ring-primary/30' : ''].join(' ')}
                  />

                  <label
                    htmlFor="sendms-email"
                    className={`absolute ${locale === 'fa' ? 'right-3' : 'left-3'} top-2 text-base text-muted-foreground transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm`}
                  >
                    {t('email')}
                  </label>
                </div>

                {showError && <FieldError errors={[fieldState.error]} />}
              </Field>
            );
          }}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => {
            const showError = fieldState.isTouched && fieldState.invalid;
            const showValid = fieldState.isTouched && !fieldState.invalid;

            return (
              <Field data-invalid={showError} className="relative">
                <div className="relative mt-2">
                  <Textarea
                    {...field}
                    id="sendms-desc"
                    placeholder=" "
                    rows={6}
                    aria-invalid={showError}
                    className={['peer min-h-28 3xl:min-h-64 resize-none text-foreground pb-12', showError ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/30' : '', showValid ? 'border-primary focus-visible:border-primary focus-visible:ring-primary/30' : ''].join(' ')}
                  />

                  <label
                    htmlFor="sendms-desc"
                    className={`absolute ${locale === 'fa' ? 'right-3' : 'left-3'} top-3 text-base text-muted-foreground transition-all duration-300 peer-focus:-top-7 peer-focus:text-sm peer-focus:text-primary peer-not-placeholder-shown:-top-7 peer-not-placeholder-shown:text-sm`}
                  >
                    {t('description')}
                  </label>

                  <InputGroupAddon className="absolute bottom-0" align="block-end">
                    <InputGroupText className="tabular-nums">{locale === 'fa' ? `${(field.value?.length || 0).toLocaleString('fa-IR')} / ١٠٠ ${t('character')}` : `${field.value?.length || 0} / 100 ${t('character')}`}</InputGroupText>
                  </InputGroupAddon>
                </div>

                {showError && <FieldError errors={[fieldState.error]} />}
              </Field>
            );
          }}
        />
      </FieldGroup>
      <Button disabled={!isValid} type="submit" className="w-full lg:mt-0 mt-4 py-5.5 text-foreground rounded-[15px] bg-primary hover:bg-primary/80 shadow-none dark:text-background">
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2 w-full h-full">
            <Spinner />
            <span>{t('sending')}</span>
          </div>
        ) : (
          t('send')
        )}
      </Button>
    </form>
  );
}
