import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import React, { useEffect, useRef } from "react";

am4core.useTheme(am4themes_animated);

const SummaryRequest = () => {
  const chart = useRef(null);

  // Add data
  const data = [
    {
      country: "Lithuania",
      litres: 501.9,
      color: am4core.color("#41e310"),
    },
    {
      country: "Czechia",
      litres: 301.9,
      color: am4core.color("#ded302"),
    },
    {
      country: "Ireland",
      litres: 201.1,
      color: am4core.color("#d60000"),
    },
  ];
  const chartOne = () => {
    let chart = am4core.create("SummaryRequest-1", am4charts.PieChart);
    chart.data = data;
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = "color";
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.labels.template.disabled = true;
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.hiddenState.properties.radius = am4core.percent(0);
  };
  const chartTwo = () => {
    let chart = am4core.create("SummaryRequest-2", am4charts.PieChart);
    chart.data = data;
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = "color";
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.labels.template.disabled = true;
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.hiddenState.properties.radius = am4core.percent(0);
    chart.svgContainer.htmlElement.style.height = 100;
  };
  useEffect(() => {
    chartOne();
    chartTwo();
  }, []);
  return (
    <CCard>
      <CCardHeader>Summary Request</CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="12" lg="6">
            <div
              id="SummaryRequest-1"
              style={{ width: "100%", height: "200px" }}
            ></div>
          </CCol>
          <CCol sm="12" lg="6">
            <div
              id="SummaryRequest-2"
              style={{ width: "100%", height: "200px" }}
            ></div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default SummaryRequest;
