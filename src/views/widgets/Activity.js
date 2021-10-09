import React from "react";
import PropTypes from "prop-types";
import {
  CWidgetBrand,
  CRow,
  CCol,
  CCardBody,
  CCardHeader,
  CCard,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";

const Activity = ({ withCharts }) => {
  // render

  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CCard>
          <CCardBody>
            <h4 style={{ color: "blue" }}>DC - Pekanbaru </h4>
            <p>PIC : Sugeng </p>
            <p>Office : </p>
            <p>Updateed At:</p>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" lg="5">
        <CCard>
          <CCardBody>
            <span className="clearfix">
              <h1 className="float-left display-3 mr-4">500</h1>
              <h4 className="pt-3">Houston, we have a problem!</h4>
              <p className="text-muted float-left">
                The page you are looking for is temporarily unavailable. \n Test
              </p>
            </span>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" lg="3">
        <CCard>
          <CCardBody>Temp. & Humidities</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Activity;
