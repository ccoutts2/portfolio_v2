"use client";

import { Button } from "../ui/buttons/Button";
import { Field } from "../ui/Field/Field";
import { Input } from "../ui/inputs/Input/Input";
import { TextArea } from "../ui/inputs/TextArea/TextArea";

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  return;
};

const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  return;
};

// import { Resend } from 'resend';

// const resend = new Resend('••••••••••••••••••••••••••••••••••••');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'chris.dcoutts@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-8 w-full">
      <Field label="What's your name?" id="name">
        <Input onChange={handleInputChange} name="name" required />
      </Field>
      <Field label="What's your email?" id="email">
        <Input onChange={handleInputChange} name="name" type="email" required />
      </Field>
      <Field label="What do you want to get in touch about?" id="message">
        <TextArea onChange={handleTextAreaChange} name="message" required />
      </Field>
      <Button>
        <span className="flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-[20rem]  bg-[#d82e2e]"></span>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
