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
  const history = useHistory();
  const location = useLocation().pathname.split("/");
  const pathParent = location[1];
  const pathChild = location[2];
  const pathOperation = location[3];
  const [pagination, setPagination] = useState({ page: 1, size: 10 });
  const [totalPage, setTotalPage] = useState(0);
  const [loadData, setLoadData] = useState(true);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    // $axios
    //   .get(
    //     `master/user_department?page=${pagination.page}&limit=${pagination.size}`
    //   )
    //   .then((res) => {
    //     console.table(res.data.data);
    //     setListData(res.data.data);
    //     setTotalPage(parseInt(res.data.total / pagination.size) + 1);
    //   });
  }, [pagination, loadData]);

  const data = [
    { name: "Datacomm", critical: 0, major: 0, minor: 0 },
    { name: "GraPARI ON", critical: 0, major: 0, minor: 0 },
    { name: "GraPARI MITRA", critical: 0, major: 0, minor: 0 },
  ];
  const fields = [
    { key: "name", label: " " },
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
          items={data}
          fields={fields}
          hover
          scopedSlots={{
            critical: (item) => (
              <td style={{ textAlign: "center" }}>
                <CBadge color={"danger"}>{item.critical}</CBadge>
              </td>
            ),
            major: (item) => (
              <td style={{ textAlign: "center" }}>
                <CBadge color={"warning"}>{item.major}</CBadge>
              </td>
            ),
            minor: (item) => (
              <td style={{ textAlign: "center" }}>
                <CBadge color={"success"}>{item.minor}</CBadge>
              </td>
            ),
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default SummaryAlarm;
