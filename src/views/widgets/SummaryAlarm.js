import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import $axios from "../../api";

const SummaryAlarm = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    if (initialLoad) {
      $axios.get(`dashboard/summary-alarm`).then((res) => {
        setListData(res.data.data);
      });
      setInitialLoad(false);
    }
  }, []);

  const fields = [
    { key: "graha_name", label: " " },
    { key: "critical", label: "Critical" },
    { key: "major", label: "Major" },
    { key: "minor", label: "Minor" },
  ];

  const getBadge = (status) => {
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
