// src/components/DateTime.tsx

"use client"; // This is a client component because we're using hooks

import { useEffect, useState } from "react";

export default function DateTime() {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "medium",
      });
      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-yellow-500 text-lg font-semibold">
      {dateTime}
    </div>
  );
}
