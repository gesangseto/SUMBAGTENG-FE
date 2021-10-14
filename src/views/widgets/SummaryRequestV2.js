import {
  CCard,
  CCardBody,
  CButton,
  CCardHeader,
  CCol,
  CRow,
  CBadge,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

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

const defaultLabelStyle = {
  fontSize: "5px",
  fontFamily: "sans-serif",
};
const SummaryRequestV2 = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const date = new Date();
  const [dataDaily, setDataDaily] = useState([
    {
      kategori: "RESET PASSWORD DOMAIN",
      total: 4,
    },
    {
      kategori: "UNLOCK USER DOMAIN",
      total: 2,
    },
    {
      kategori: "APPLICATION/SOFTWARE",
      total: 225,
    },
    {
      kategori: "NETWORK/WIFI",
      total: 22,
    },
    {
      kategori: "HARDWARE",
      total: 6,
    },
    {
      kategori: "VIRUS/MALWARE",
      total: 1,
    },
    {
      kategori: "SUPPORT BUSINESS",
      total: 19,
    },
    {
      kategori: "SUPPORT EVENT",
      total: 1,
    },
  ]);
  const [dataMonthly, setDataMonthly] = useState([]);

  useEffect(() => {
    let newData = [];
    let i = 0;
    for (const it of dataDaily) {
      let temp = {};
      temp.title = it.kategori;
      temp.value = it.total;
      temp.color = listColor[(i += 1)];
      newData.push(temp);
    }
    setDataDaily(newData);
    console.log(dataDaily);
  }, []);
  return (
    <CCard>
      <CCardHeader>Summary Request</CCardHeader>
      <CCardBody>
        <CRow style={{ borderWidth: 1 }}>
          <CCol sm="6" lg="6">
            <CRow>
              <CCol sm="6" lg="6">
                {dataDaily.length > 0 && (
                  <>
                    <PieChart
                      data={dataDaily}
                      // lineWidth={80}
                      label={({ dataEntry }) =>
                        `${parseFloat(dataEntry.percentage).toFixed(2)} %`
                      }
                      labelStyle={{
                        ...defaultLabelStyle,
                      }}
                    />
                  </>
                )}
              </CCol>
              <CCol sm="6" lg="6">
                {dataDaily.map((item, index) => {
                  return (
                    <CRow key={index}>
                      <CCol sm="7" lg="7">
                        <p style={{ fontSize: 10 }}> {item.title}</p>
                      </CCol>
                      <CCol sm="3" lg="3">
                        <CBadge
                          style={{
                            backgroundColor: item.color ?? listColor[index],
                          }}
                        >
                          {item.value}
                        </CBadge>
                      </CCol>
                    </CRow>
                  );
                })}
              </CCol>
            </CRow>
          </CCol>
          <CCol sm="6" lg="6">
            <CRow>
              <CCol sm="6" lg="6">
                {dataMonthly.length > 0 && (
                  <>
                    <PieChart
                      data={dataMonthly}
                      // lineWidth={80}
                      label={({ dataEntry }) =>
                        `${parseFloat(dataEntry.percentage).toFixed(2)} %`
                      }
                      labelStyle={{
                        ...defaultLabelStyle,
                      }}
                    />
                  </>
                )}
              </CCol>
              <CCol sm="6" lg="6">
                {dataMonthly.map((item, index) => {
                  return (
                    <CRow key={index}>
                      <CCol sm="7" lg="7">
                        <p style={{ fontSize: 10 }}> {item.title}</p>
                      </CCol>
                      <CCol sm="3" lg="3">
                        <CBadge
                          style={{
                            backgroundColor: item.color ?? listColor[index],
                          }}
                        >
                          {item.value}
                        </CBadge>
                      </CCol>
                    </CRow>
                  );
                })}
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default SummaryRequestV2;
