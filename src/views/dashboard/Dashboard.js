import { CCol, CRow } from "@coreui/react";
import React, { lazy } from "react";

const HealthyCheckV2 = lazy(() => import("../widgets/HealthyCheckV2.js"));
const SummaryRequest = lazy(() => import("../widgets/SummaryRequest.js"));
const BbmV2 = lazy(() => import("../widgets/BbmV2.js"));
const Activity = lazy(() => import("../widgets/Activity.js"));
const SummaryAlarm = lazy(() => import("../widgets/SummaryAlarm.js"));
const CalendarWidget = lazy(() => import("../widgets/CalendarWidget.js"));
const EventCalendar = lazy(() => import("../widgets/EventCalendar.js"));

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol sm="12" lg="4">
          <HealthyCheckV2 />
          <SummaryAlarm />
        </CCol>
        <CCol sm="12" lg="8">
          <SummaryRequest />
          <BbmV2 />
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
          <EventCalendar />
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
