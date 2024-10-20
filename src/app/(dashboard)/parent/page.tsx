import Announcement from "@/app/components/announcement/Announcement";
import BigCalendar from "@/app/components/calendar/BigCalendar";
import EventsCalendar from "@/app/components/events/EventsCalendar";
import React from "react";

const ParentPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 xl:flex-row">
      {/* LEFT */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        <div className="h-full rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <EventsCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default ParentPage;
