import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./Calender";
import React from "react";
import Activities from "./Activities";
const Schedule = () => {
  return (
    <div className="calendar d-flex justify-content-evenly align-items-center flex-row pt-5 pb-5">
      <Activities
        Texts={
          "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        }
        Title="Scheduling that actually works"
      />
      <div className="miniCalendar">
        <Calendar />
      </div>
    </div>
  );
};
export default Schedule;
