import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCardText,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import $axios from "../../api";
import HSBar from "react-horizontal-stacked-bar-chart";
import { ta } from "date-fns/locale";

const stye_bar = {
  width: "100%",
  marginBottom: "2%",
  padding: "10px",
  border: "1px solid black",
};

const BbmV2 = () => {
  const [load, setLoad] = useState(true);
  const [dataDailyTank1, setDataDailyTank1] = useState([]);
  const [dataDailyTank2, setDataDailyTank2] = useState([]);
  const [dataMonthlyTank1, setDataMonthlyTank1] = useState([]);
  const [dataMonthlyTank2, setDataMonthlyTank2] = useState([]);
  const timer = 10000; // This load every 10 second

  useEffect(() => {
    if (load) {
      $axios.get(`dashboard/bbm`).then((res) => {
        let resp = res.data.data;
        if (resp[0]) {
          var tank_d_1 = resp[0].items[0];
          var tank_d_2 = resp[0].items[1];
          setDataDailyTank1(tank_d_1.detail);
          setDataDailyTank2(tank_d_2.detail);
        }
        if (resp[1]) {
          var tank_m_1 = resp[1].items[0];
          var tank_m_2 = resp[1].items[1];
          setDataMonthlyTank1(tank_m_1.detail);
          setDataMonthlyTank2(tank_m_2.detail);
        }
        setLoad(false);
        setTimeout(function () {
          setLoad(true);
        }, timer);
      });
    }
  }, [load]);

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
            <div style={stye_bar}>
              <h5>Tank 1 (2500 L)</h5>
              <HSBar
                showTextDown
                id="hsbarExample"
                data={dataDailyTank1}
                onClick={(e) => console.log(e.bar)}
              />
              <h5>Tank 2 (3000 L)</h5>
              <HSBar
                showTextDown
                id="hsbarExample"
                data={dataDailyTank2}
                onClick={(e) => console.log(e.bar)}
              />
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12" lg="12">
            <div style={stye_bar}>
              <h5>Tank 1 (15000 L)</h5>
              <HSBar
                showTextDown
                id="hsbarExample"
                data={dataMonthlyTank1}
                onClick={(e) => console.log(e.bar)}
              />
              <h5>Tank 2 (30000 L)</h5>
              <HSBar
                showTextDown
                id="hsbarExample"
                data={dataMonthlyTank2}
                onClick={(e) => console.log(e.bar)}
              />
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default BbmV2;
