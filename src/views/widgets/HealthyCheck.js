import { load } from "@amcharts/amcharts4/.internal/core/utils/Net";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import $axios from "../../api";

am4core.useTheme(am4themes_animated);

const HealthyCheck = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const chart = useRef(null);
  const [data, setData] = useState([]);

  const loadPie = () => {
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
  };
  // Add data
  useEffect(() => {
    if (initialLoad) {
      $axios.get(`dashboard/healthy-check`).then((res) => {
        let resp = res.data.data;
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
        setData(datas);
      });
      setInitialLoad(false);
    }
  }, []);
  return (
    <CCard>
      <CCardHeader>Healthy Check</CCardHeader>
      <CCardBody>
        {data.length > 0 && loadPie()}
        <div id="HealthyCheck" style={{ width: "100%", height: "350px" }}></div>
      </CCardBody>
    </CCard>
  );
};

export default HealthyCheck;
