import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import $axiosResource from "../../apiResource";
import moment from "moment";

am4core.useTheme(am4themes_animated);

const SummaryRequest = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const date = new Date();
  const [dataDaily, setDataDaily] = useState([]);
  const [dataMonthly, setDataMonthly] = useState([]);
  const chart = useRef(null);

  // Add data

  const chartDaily = () => {
    let chart = am4core.create("SummaryRequest-1", am4charts.PieChart);
    chart.data = dataDaily;
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "total";
    pieSeries.dataFields.category = "kategori";
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
    return () => {
      chart.dispose();
    };
  };
  const chartMonthly = () => {
    let chart = am4core.create("SummaryRequest-2", am4charts.PieChart);
    chart.data = dataMonthly;
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "total";
    pieSeries.dataFields.category = "kategori";
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

    return () => {
      chart.dispose();
    };
  };
  useEffect(() => {
    if (initialLoad) {
      $axiosResource
        .get(
          `resource/itsupport_tool/API/total_ticket.php?type=monthly&month=${moment(
            date
          ).format("YYYY-MM")}`
        )
        .then((res) => {
          let resp = res.data;
          let colors = [
            am4core.color("yellow"),
            am4core.color("red"),
            am4core.color("green"),
          ];
          let i = 0;
          let datas = [];
          for (const it of resp) {
            let tmp = it;
            tmp.color = colors[i];
            i = i + 1;
            datas.push(tmp);
          }
          setDataMonthly(datas);
          chartMonthly();
        });
      $axiosResource
        .get(
          `resource/itsupport_tool/API/total_ticket.php?type=daily&month=${moment(
            date
          ).format("YYYY-MM-DD")}`
        )
        .then((res) => {
          let resp = res.data;
          let colors = [
            am4core.color("yellow"),
            am4core.color("red"),
            am4core.color("green"),
          ];
          let i = 0;
          let datas = [];
          for (const it of resp) {
            let tmp = it;
            tmp.color = colors[i];
            i = i + 1;
            datas.push(tmp);
          }
          setDataDaily(datas);
          chartDaily();
        });
      setInitialLoad(false);
    }
  }, []);
  return (
    <CCard>
      <CCardHeader>Summary Request</CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="12" lg="6">
            <div
              id="SummaryRequest-1"
              style={{ width: "100%", height: "210px" }}
            ></div>
          </CCol>
          <CCol sm="12" lg="6">
            <div
              id="SummaryRequest-2"
              style={{ width: "100%", height: "210px" }}
            ></div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default SummaryRequest;
