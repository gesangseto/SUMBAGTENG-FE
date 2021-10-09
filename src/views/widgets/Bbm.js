import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React, { useEffect } from "react";
import CanvasJSReact from "../../assets/canvasjs-3.4.3/canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJSChart2 = CanvasJSReact.CanvasJSChart;

const Bbm = () => {
  const options = {
    animationEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    axisY: {
      interval: 10,
      suffix: "%",
    },
    toolTip: {
      shared: true,
    },
    dataPointWidth: 40,
    height: "150",
    weight: "100%",
    data: [
      {
        type: "stackedBar100",
        toolTipContent: "{label}<br><b>{name}:</b> {y} (#percent%)",
        showInLegend: true,
        name: "April",
        dataPoints: [
          { y: 600, label: "Tank 1" },
          { y: 400, label: "Tank 2" },
        ],
      },
      {
        type: "stackedBar100",
        toolTipContent: "<b>{name}:</b> {y} (#percent%)",
        showInLegend: true,
        name: "May",
        dataPoints: [
          { y: 400, label: "Tank 1" },
          { y: 500, label: "Tank 2" },
        ],
      },
    ],
  };

  useEffect(() => {}, []);
  return (
    <CCard>
      <CCardHeader>BBM DC Pekanbaru</CCardHeader>
      <CCardBody>
        <div>
          Total Kapasitas Tangki : {"dummy"}
          <CanvasJSChart
            options={options}
            /* onRef = {ref => this.chart = ref} */
          />
        </div>
        <div>
          Total Kapasitas Tangki : {"dummy"}
          <CanvasJSChart2
            style={{ width: "100%", height: "500px" }}
            options={options}
            /* onRef = {ref => this.chart = ref} */
          />
        </div>
      </CCardBody>
    </CCard>
  );
};

export default Bbm;
