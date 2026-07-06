"use client";
import { useEffect, useState } from "react";
import { getActiveAnnouncements } from "@/actions/supabase";

export default function AnnouncementBar() {
  const [announcement, setAnnouncement] = useState<string>("Welcome to our school. Applications are now open!");

  useEffect(() => {
    async function fetchAnnouncement() {
      try {
        const data = await getActiveAnnouncements();
        if (data && data.length > 0) {
          setAnnouncement(data[0].text);
        }
      } catch (error) {
        console.error("Error fetching announcement:", error);
      }
    }
    fetchAnnouncement();
  }, []);

  return (
    <div className="bg-school-black text-school-yellow py-2 overflow-hidden whitespace-nowrap border-b border-school-yellow/20">
      <div className="inline-block animate-marquee px-4 font-medium text-sm">
        {announcement} &nbsp; &nbsp; &nbsp; &nbsp; {announcement} &nbsp; &nbsp; &nbsp; &nbsp; {announcement}
      </div>
    </div>
  );
}
