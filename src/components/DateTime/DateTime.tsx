"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";

const DateTime = () => {
  const [time, setTime] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const updateDateTime = () => {
    const now: Date = new Date();

    const timeString: string = format(now, "hh:mm:ss a");
    setTime(timeString);

    const currentHour: number = now.getHours();

    if (currentHour < 12) {
      setMessage("Good Morning");
    } else if (currentHour >= 12 && currentHour < 17) {
      setMessage("Good Afternoon");
    } else if (currentHour >= 17 && currentHour <= 21) {
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
      <dd className="hidden md:flex">
        <time suppressHydrationWarning={true}>{time || "..."}</time>
      </dd>

      <dt className="vh">Message alert:</dt>
      <dd className="border border-[#191919] dark:border-[#f6f6f6] rounded-3xl px-[6px] py-[1.5px]">
        {message || "Hello"}
      </dd>
    </dl>
  );
};

export default DateTime;
