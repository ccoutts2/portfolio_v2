"use client";

import { useState, useEffect } from "react";

const DateTime: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const updateDateTime = () => {
    const now = new Date();

    const timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timeZoneAbbr: string = timeZone.split("/").pop()?.replace("_", " ") || "";

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const timeStr: string =
      now.toLocaleTimeString("en-GB", timeOptions) + " " + `[${timeZoneAbbr}]`;

    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const dateStr: string = now.toLocaleDateString("en-GB", dateOptions);

    setTime(timeStr);
    setDate(dateStr);
  };

  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <dl className="flex gap-1 text-xs">
      <dt className="vh">Current time:</dt>
      <dd>{time}</dd>

      <dt className="vh">Current date:</dt>
      <dd className="hidden lg:flex">{date}</dd>
    </dl>
  );
};

export default DateTime;
