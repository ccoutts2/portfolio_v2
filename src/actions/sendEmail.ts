"use server";
import React from "react";
import { Resend } from "resend";

import { EmailTemplate } from "@/components/EmailTemplate/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (previousState: unknown, formData: FormData) => {
  console.log(previousState);

  const honeyPot = formData.get("alsoSubmit");

  if (honeyPot) {
    console.log("Spam attempt blocked.");
    return { success: true, message: "Spam blocked" };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "Contact Form <notifications@yourdomain.com>",
      to: "chris.dcoutts@gmail.com",
      subject: "Message from portfolio contact form",
      react: React.createElement(EmailTemplate, {
        name: name as string,
        email: email as string,
        message: message as string,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};
