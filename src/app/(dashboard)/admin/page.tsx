import EventsCalendar from "@/app/components/events/EventsCalendar";
import UserCard from "@/app/components/cards/UserCard";
import AttendanceChart from "@/app/components/charts/attendance/AttendanceChart";
import CountChart from "@/app/components/charts/count/CountChart";
import FinanceChart from "@/app/components/charts/finance/FinanceChart";
import React from "react";
import Announcement from "@/app/components/announcement/Announcement";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* LEFT */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        {/* USER CARDS */}
        <ul className="flex flex-wrap justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </ul>
        {/* MIDDLE CHARTS */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* COUNT CHART */}
          <div className="h-[450px] w-full lg:w-1/3">
            <CountChart />
          </div>
          {/* ATTENDANT CHART */}
          <div className="h-[450px] w-full lg:w-2/3">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="h-[500px] w-full">
          {/* FINANCE CHART */}
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <EventsCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
