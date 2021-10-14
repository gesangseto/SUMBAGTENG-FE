import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import $axios from "../../api";

const HealthyCheckV2 = () => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const defaultLabelStyle = {
    fontSize: "5px",
    fontFamily: "sans-serif",
  };
  const timer = 10000; // This load every 10 second
  const listColor = [
    "#babaa8",
    "#b4bfa4",
    "#a4bfa7",
    "#a4bfbe",
    "#a4b4bf",
    "#a4a7bf",
    "#7d7d77",
    "#8d8d88",
    "#9d9d99",
  ];

  useEffect(() => {
    if (load) {
      $axios.get(`dashboard/healthy-check`).then((res) => {
        let resp = res.data.data;
        console.table(resp);
        setData(resp);
        setLoad(false);
        setTimeout(function () {
          setLoad(true);
        }, timer);
      });
    }
  }, [load]);

  return (
    <CCard>
      <CCardHeader>Healthy Check</CCardHeader>
      <CCardBody>
        {data.length > 0 && (
          <>
            <PieChart
              data={data}
              // lineWidth={80}
              label={({ dataEntry }) => `${dataEntry.percentage} %`}
              labelStyle={{
                ...defaultLabelStyle,
              }}
            />
          </>
        )}
        {data.map((item, index) => {
          return (
            <CRow key={index}>
              <CCol sm="4" lg="4">
                {item.title}
              </CCol>
              <CCol sm="4" lg="4">
                {item.value}
              </CCol>
              <CCol sm="4" lg="4" class="float-right">
                <CButton
                  style={{ backgroundColor: item.color ?? listColor[index] }}
                  className="px-4"
                />
              </CCol>
            </CRow>
          );
        })}
      </CCardBody>
    </CCard>
  );
};

export default HealthyCheckV2;
