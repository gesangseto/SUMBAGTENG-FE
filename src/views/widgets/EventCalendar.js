import { CCard, CCardBody } from "@coreui/react";
import React from "react";
import CalendarEvent from "react-awesome-calendar";

const EventCalendar = ({}) => {
  const events = [
    {
      id: 1,
      color: "#1ccb9e",
      from: "2021-10-01T13:00:00+00:00",
      to: "2021-10-02T13:00:00+00:00",
      title: "This is an event",
    },
    {
      id: 2,
      color: "#1ccb9e",
      from: "2021-05-01T13:00:00+00:00",
      to: "2021-05-05T14:00:00+00:00",
      title: "This is another event",
    },
    {
      id: 3,
      color: "#3694DF",
      from: "2021-05-05T13:00:00+00:00",
      to: "2021-05-05T20:00:00+00:00",
      title: "This is also another event",
    },
  ];

  return (
    <CCard>
      <CCardBody>
        <CalendarEvent
          events={events}
          onClickPrev={() => console.log("YETS")}
        />
      </CCardBody>
    </CCard>
  );
};

export default EventCalendar;
