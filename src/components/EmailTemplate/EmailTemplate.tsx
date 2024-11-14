import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <section className="flex flex-col gap-4">
    <h1>Hey, Chris!</h1>
    <p>You have a new email from, {name}</p>
    <p>Their email address is: {email}</p>
    <p>They wrote to say:</p>
    <p>{message}</p>
  </section>
);
