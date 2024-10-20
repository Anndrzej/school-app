"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { EventType } from "./types";
import Event from "./Event";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events: EventType[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventsCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="rounded-md bg-white p-4">
      <Calendar locale="en-EN" onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h3 className="my-4 text-lg font-semibold">Events</h3>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      <ul className="flex flex-col gap-4">
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
};

export default EventsCalendar;
