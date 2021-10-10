import { CCol, CRow } from "@coreui/react";
import React, { lazy } from "react";

const HealthyCheck = lazy(() => import("../widgets/HealthyCheck.js"));
const SummaryRequest = lazy(() => import("../widgets/SummaryRequest.js"));
const Bbm = lazy(() => import("../widgets/Bbm.js"));
const Activity = lazy(() => import("../widgets/Activity.js"));
const SummaryAlarm = lazy(() => import("../widgets/SummaryAlarm.js"));
const CalendarWidget = lazy(() => import("../widgets/CalendarWidget.js"));
const EventCalendar = lazy(() => import("../widgets/EventCalendar.js"));

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol sm="12" lg="4">
          <HealthyCheck />
          <SummaryAlarm />
        </CCol>
        <CCol sm="12" lg="8">
          <SummaryRequest />
          <Bbm />
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="12" lg="12">
          <Activity />
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="6" lg="4">
          <CalendarWidget />
        </CCol>
        <CCol sm="6" lg="8">
          {/* <EventCalendar /> */}
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
