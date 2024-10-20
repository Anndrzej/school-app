import React, { FC } from "react";
import { EventType } from "./types";

interface EventProps {
  event: EventType;
}

const Event: FC<EventProps> = ({ event }) => {
  return (
    <li className="odd:border-t-sky even:border-t-purple rounded-md border-2 border-t-4 border-gray-100 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-600">{event.title}</h3>
        <span className="text-xs text-gray-300">{event.time}</span>
      </div>
      <p className="mt-2">{event.description}</p>
    </li>
  );
};

export default Event;
