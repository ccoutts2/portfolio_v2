"use client";

import { useState, useRef } from "react";
import { Button } from "../ui/buttons/Button";
import { Field } from "../ui/Field/Field";
import { Input } from "../ui/inputs/Input/Input";
import { TextArea } from "../ui/inputs/TextArea/TextArea";

import { sendEmail } from "@/actions/sendEmail";
import { z } from "zod";
import { Toast } from "../Toast/Toast";

const Schema = z.object({
  name: z.string().min(1, "Your name is reuiqred"),
  email: z
    .string({
      invalid_type_error: "Invalid email",
    })
    .email(),
  message: z.string().min(1, "A message is required"),
});

interface ContactFormProps {
  onClick?: () => void;
}

const ContactForm = ({ onClick }: ContactFormProps) => {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [emailError, setEmailError] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Send");
  const [buttonPending, setButtonPending] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);

      const emailValidation = Schema.shape.email.safeParse(value);
      if (!emailValidation.success && value !== "") {
        setEmailError("Please input a valid email");
      } else {
        setEmailError("");
      }
    }
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message") {
      setMessage(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessages({});
    setButtonPending(true);
    setButtonLabel("Sending");

    const formData = new FormData(form.current!);
    const validatedFields = Schema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      setErrorMessages(validatedFields.error.flatten().fieldErrors);
      setButtonLabel("Send");
      return;
    }
    await sendEmail(null, formData);

    setName("");
    setEmail("");
    setMessage("");
    setButtonPending(false);
    setButtonLabel("Send");
    setEmailError("");
    setIsToastVisible(true);

    setTimeout(() => setIsToastVisible(false), 5000);
  };

  return (
    <form ref={form} onSubmit={onSubmit} className="flex flex-col gap-8 w-full">
      <div className="absolute top-2 right-2 md:hidden">
        <Button onClick={onClick}>X</Button>
      </div>
      <Field label="What's your name?" id="name">
        <Input onChange={handleInputChange} name="name" required value={name} />
      </Field>
      <Field label="What's your email?" id="email">
        <Input
          onChange={handleInputChange}
          name="email"
          type="email"
          required
          value={email}
        />
      </Field>
      {emailError && <p className="text-sm text-[#d82e2e]">{emailError}</p>}
      <Field label="What do you want to get in touch about?" id="message">
        <TextArea
          onChange={handleTextAreaChange}
          name="message"
          required
          value={message}
          rows={5}
        />
      </Field>
      <div className="relative w-full pb-1 pt-4">
        {buttonPending ? (
          <Button type="submit">
            <span className="flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-[20rem] bg-[#d8d82e]"></span>
            {buttonLabel}
          </Button>
        ) : (
          <Button type="submit">
            <span className="flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-[20rem] bg-[#d82e2e]"></span>
            <span className="dark:text-[#191919]">{buttonLabel}</span>
          </Button>
        )}
        {Object.keys(errorMessages).length > 0 && (
          <p className="text-sm text-[#d82e2e]">
            Please enter all the required fields
          </p>
        )}
        {isToastVisible && (
          <Toast>
            <div>Email was successfully sent!</div>
          </Toast>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
