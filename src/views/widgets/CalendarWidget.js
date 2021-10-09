import { CCard, CCardBody } from "@coreui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarWidget = ({}) => {
  const [value, onChange] = useState(new Date());

  return (
    <CCard>
      <CCardBody>
        <div>
          <Calendar onChange={onChange} value={value} />
        </div>
      </CCardBody>
    </CCard>
  );
};

export default CalendarWidget;
