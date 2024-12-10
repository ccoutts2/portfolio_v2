"use client";

import { useState, useEffect } from "react";

const DateTime = () => {
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

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

    setTime(timeStr);

    const currentHour = now.getHours();

    if (currentHour < 12) {
      setMessage("Good Morning");
    } else if (currentHour >= 12 && currentHour < 16) {
      setMessage("Good Afternoon");
    } else if (currentHour >= 16 && currentHour <= 21) {
      setMessage("Good Evening");
    } else {
      setMessage("Good Night");
    }
  };

  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <dl className="flex items-center gap-2 text-xs">
      <dt className="vh">Current time:</dt>
      <dd className="hidden md:flex">{time}</dd>

      <dt className="vh">Message alert:</dt>
      <dd className="border border-[#191919] dark:border-[#f6f6f6] rounded-3xl px-[6px] py-[1.5px]">
        {message}
      </dd>
    </dl>
  );
};

export default DateTime;
