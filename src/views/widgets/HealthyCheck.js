import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React, { useEffect, useRef } from "react";

am4core.useTheme(am4themes_animated);

const HealthyCheck = () => {
  const chart = useRef(null);

  // Add data
  const data = [
    {
      title: "Lithuania",
      value: 501.9,
      color: am4core.color("#41e310"),
    },
    {
      title: "Czechia",
      value: 301.9,
      color: am4core.color("#ded302"),
    },
    {
      title: "Ireland",
      value: 201.1,
      color: am4core.color("#d60000"),
    },
  ];
  useEffect(() => {
    let chart = am4core.create("HealthyCheck", am4charts.PieChart);
    chart.data = data;
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "title";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = "color";
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.labels.template.disabled = true;
    chart.legend = new am4charts.Legend();
    // chart.legend.position = "right";
    chart.hiddenState.properties.radius = am4core.percent(0);

    return () => {
      chart.dispose();
    };
  }, []);
  return (
    <CCard>
      <CCardHeader>Healthy Check</CCardHeader>
      <CCardBody>
        <div id="HealthyCheck" style={{ width: "100%", height: "500px" }}></div>
      </CCardBody>
    </CCard>
  );
};

export default HealthyCheck;
