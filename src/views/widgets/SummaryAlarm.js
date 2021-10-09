import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useHistory, useLocation } from "react-router-dom";
import $axios from "../../api";

const SummaryAlarm = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    if (listData.length == 0) {
      $axios.get(`dashboard/summary-alarm`).then((res) => {
        console.table(res.data.data);
        setListData(res.data.data);
      });
    }
  }, [listData]);

  const fields = [
    { key: "graha_name", label: " " },
    { key: "critical", label: "Critical" },
    { key: "major", label: "Major" },
    { key: "minor", label: "Minor" },
  ];

  const getBadge = (status) => {
    console.log(status);
    switch (status) {
      case "1":
        return "success";
      case "2":
        return "danger";
    }
  };

  return (
    <CCard>
      <CCardHeader>Summary Alarm</CCardHeader>
      <CCardBody>
        <CDataTable
          items={listData}
          fields={fields}
          hover
          scopedSlots={{
            critical: (item) => (
              <td style={{ textAlign: "center" }}>
                <CBadge color={"danger"}>{item.critical ?? 0}</CBadge>
              </td>
            ),
            major: (item) => (
              <td style={{ textAlign: "center" }}>
                <CBadge color={"warning"}>{item.major ?? 0}</CBadge>
              </td>
            ),
            minor: (item) => (
              <td style={{ textAlign: "center" }}>
                <CBadge color={"success"}>{item.minor ?? 0}</CBadge>
              </td>
            ),
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default SummaryAlarm;
