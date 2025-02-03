'use client';

import React, { useState } from 'react';
import { Form, Input, Button } from '@heroui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [action, setAction] = useState<string | null>(null);
  const [show, setShow] = useState<boolean>(false);

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
      validationBehavior="native"
      onReset={() => setAction('reset')}
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        isRequired
        label="ایمیل"
        labelPlacement="outside"
        variant="underlined"
        name="email"
        type="email"
        errorMessage="ایمیل وارد شده صحیح نمیباشد"
      />

      <Input
        isRequired
        errorMessage="وارد کردن رمز عبور الزامی میباشد"
        label="رمز عبور"
        labelPlacement="outside"
        variant="underlined"
        name="password"
        type={show ? 'text' : 'password'}
        endContent={
          <div onClick={() => setShow(!show)}>
            {show ? (
              <FaEye className="cursor-pointer hover:scale-105 duration-300" />
            ) : (
              <FaEyeSlash className="cursor-pointer hover:scale-105 duration-300" />
            )}
          </div>
        }
      />
      <div className="flex gap-2">
        <Button color="primary" type="submit">
          تایید
        </Button>
        <Button type="reset" variant="flat">
          پاک کردن
        </Button>
      </div>
    </Form>
  );
}
