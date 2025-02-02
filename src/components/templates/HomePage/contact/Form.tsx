'use client';

import { Input, Button, Textarea } from '@heroui/react';

export default function FormContact() {
  return (
    <div className="space-y-4 bg-fore dark:bg-back text-xl w-full flex flex-col justify-center rounded-md items-center p-6 lg:mr-24 max-w-lg">
      <Input
        classNames={{
          label: 'text-back dark:text-fore text-lg',
          inputWrapper: 'text-lg',
        }}
        label="نام"
        type="text"
        variant="underlined"
      />
      <Input
        classNames={{
          label: 'text-back dark:text-fore text-lg',
          inputWrapper: 'text-lg',
        }}
        label="ایمیل"
        type="email"
        errorMessage="ایمیل وارد شده صحیح نمیباشد"
        variant="underlined"
      />
      <Textarea
        classNames={{
          label: 'text-back dark:text-fore text-lg',
          inputWrapper: 'text-lg',
        }}
        key="underlined"
        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        label="پیام شما"
        labelPlacement="outside"
        variant="underlined"
      />
      <Button
        type="submit"
        radius="none"
        className="w-40 border-b-1 bg-fore text-green-600 border-green-600 hover:opacity-80 duration-300 dark:bg-back"
      >
        ارسال
      </Button>
    </div>
  );
}
