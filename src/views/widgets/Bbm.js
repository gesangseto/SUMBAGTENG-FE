import { CCard, CCardBody, CCardHeader, CRow, CCol } from "@coreui/react";
import { objectOf } from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import $axios from "../../api";
import CanvasJSReact from "../../assets/canvasjs-3.4.3/canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJSChart2 = CanvasJSReact.CanvasJSChart;

const Bbm = () => {
  const [dataDaily, setDataDaily] = useState({});
  const [dataMonthly, setDataMonthly] = useState({});

  useEffect(() => {
    if (Object.keys(dataDaily).length == 0) {
      $axios.get(`dashboard/bbm-daily`).then((res) => {
        let tempData = {
          animationEnabled: true,
          theme: "light2", //"light1", "dark1", "dark2"
          axisY: {
            interval: 100,
            suffix: "%",
          },
          toolTip: {
            shared: true,
          },
          dataPointWidth: 40,
          height: 150,
          weight: "100%",
          data: res.data.data,
        };
        setDataDaily(tempData);
      });
    }

    if (Object.keys(dataMonthly).length == 0) {
      $axios.get(`dashboard/bbm-monthly`).then((res) => {
        let tempData = {
          animationEnabled: true,
          theme: "light2", //"light1", "dark1", "dark2"
          axisY: {
            interval: 100,
            suffix: "%",
          },
          toolTip: {
            shared: true,
          },
          dataPointWidth: 40,
          height: 150,
          weight: "100%",
          data: res.data.data,
        };
        setDataMonthly(tempData);
      });
    }
  }, [dataDaily, dataMonthly]);

  return (
    <CCard>
      <CCardHeader>BBM DC Pekanbaru</CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="12" lg="4">
            Total Kapasitas Tangki : 17.500 L
          </CCol>
          <CCol sm="12" lg="4">
            BBm Solar Total : 13.000 L
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12" lg="12">
            {Object.keys(dataDaily).length > 0 && (
              <CanvasJSChart options={dataDaily} height={250} />
            )}
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12" lg="12">
            {Object.keys(dataMonthly).length > 0 && (
              <CanvasJSChart2 options={dataMonthly} height={250} />
            )}
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default Bbm;
