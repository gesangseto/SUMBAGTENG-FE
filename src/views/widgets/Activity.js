import { CCard, CCardBody, CCol, CDataTable, CRow } from "@coreui/react";
import React, { useState, useEffect } from "react";
import $axios from "../../api";
import Moment from "react-moment";
const Activity = ({ withCharts }) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [pic, setPic] = useState({});
  const [activity, setActivity] = useState({});
  const [power, setPower] = useState({});
  const [bbm, setBbm] = useState([]);
  const [temp, setTemp] = useState([]);
  const [env, setEnv] = useState([]);
  // render

  useEffect(() => {
    if (initialLoad) {
      $axios.get(`dashboard/pic`).then((res) => {
        setPic(res.data.data[0]);
      });
      $axios.get(`dashboard/activity`).then((res) => {
        setActivity(res.data.data[0]);
      });
      $axios.get(`dashboard/power-condition`).then((res) => {
        setPower(res.data.data[0]);
      });
      $axios.get(`dashboard/bbm`).then((res) => {
        setBbm(res.data.data);
      });
      $axios.get(`dashboard/temp-humidities`).then((res) => {
        setTemp(res.data.data);
      });
      $axios.get(`dashboard/environment`).then((res) => {
        setEnv(res.data.data);
      });
      setInitialLoad(false);
    }
  }, []);
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CCard>
          <CCardBody>
            <h5>DC - {pic.lokasi_kerja}</h5>
            <br></br>
            <table>
              <tbody>
                <tr>
                  <td>PIC</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>Sugeng Widodo</td>
                </tr>
                <tr>
                  <td>Officer</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{pic.username_telegram}</td>
                </tr>
                <tr>
                  <td>Updated at</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>
                    <Moment format="YYYY-MM-DD">{pic.updated_at}</Moment>
                  </td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <h5>Activities</h5>
            <br></br>
            <table>
              <tbody>
                <tr>
                  <td>Vendor</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{activity.vendor}</td>
                </tr>
                <tr>
                  <td>Start Time</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>
                    <Moment format="YYYY-MM-DD hh:ii:ss">
                      {activity.start_time}
                    </Moment>
                  </td>
                </tr>
                <tr>
                  <td>End Time</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>
                    <Moment format="YYYY-MM-DD hh:ii:ss">
                      {activity.end_time}
                    </Moment>
                  </td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{activity.status}</td>
                </tr>
                <tr>
                  <td>Activity</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{activity.activity}</td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" lg="6">
        <CCard>
          <CCardBody>
            <h5>Power Condition</h5>
            <table>
              <tbody>
                <tr>
                  <td>Source</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{power.source_code}</td>
                </tr>
                <tr>
                  <td>Generator</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{power.generator}</td>
                </tr>
                <tr>
                  <td>Utility Room</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{power.utility_room}</td>
                </tr>
                <tr>
                  <td>Vas Room</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{power.vas_room}</td>
                </tr>
                <tr>
                  <td>TC Room</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{power.tc_room}</td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <h5>BBM Condition</h5>
            <CRow>
              <CCol sm="12" lg="6">
                <table style={{ borderWidth: 1 }}>
                  <thead>
                    <tr>
                      <td colSpan={3}>Daily</td>
                    </tr>
                  </thead>
                  {bbm.length > 0 && (
                    <tbody>
                      <tr>
                        <td>
                          Cap/Load{" "}
                          {bbm[0].items[0].tank_code == "tank_1_d"
                            ? "Tank 1"
                            : "Tank 2"}
                        </td>
                        <td>&nbsp;:&nbsp;</td>
                        <td>
                          {bbm[0].items[0].capacity +
                            " / " +
                            bbm[0].items[0].used +
                            " L"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Cap/Load{" "}
                          {bbm[0].items[1].tank_code == "tank_2_d"
                            ? "Tank 2"
                            : "Tank 1"}
                        </td>
                        <td>&nbsp;:&nbsp;</td>
                        <td>
                          {bbm[0].items[1].capacity +
                            " / " +
                            bbm[0].items[1].used +
                            " L"}
                        </td>
                      </tr>
                    </tbody>
                  )}
                </table>
              </CCol>
              <CCol sm="12" lg="6">
                <table style={{ borderWidth: 1 }}>
                  <thead>
                    <tr>
                      <td colSpan={3}>Monthly</td>
                    </tr>
                  </thead>
                  {bbm.length > 0 && (
                    <tbody>
                      <tr>
                        <td>
                          Cap/Load{" "}
                          {bbm[1].items[0].tank_code == "tank_1_m"
                            ? "Tank 1"
                            : "Tank 2"}
                        </td>
                        <td>&nbsp;:&nbsp;</td>
                        <td>
                          {bbm[1].items[0].capacity +
                            " / " +
                            bbm[1].items[0].used +
                            " L"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Cap/Load{" "}
                          {bbm[1].items[1].tank_code == "tank_2_m"
                            ? "Tank 2"
                            : "Tank 1"}
                        </td>
                        <td>&nbsp;:&nbsp;</td>
                        <td>
                          {bbm[1].items[1].capacity +
                            " / " +
                            bbm[1].items[1].used +
                            " L"}
                        </td>
                      </tr>
                    </tbody>
                  )}
                </table>
              </CCol>
            </CRow>
            <br></br>
            Backup Time : 55.07 hour
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" lg="3">
        <CCard>
          <CCardBody>
            <h5>Temp. & Humidities</h5>
            <table>
              <tbody>
                {temp.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.room_name}</td>
                      <td>&nbsp;:&nbsp;</td>
                      <td>{item.temp_hum}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <br></br>
            <h5>Monitoring Environment</h5>
            <table>
              <tbody>
                {env.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.environment_name}</td>
                      <td>&nbsp;:&nbsp;</td>
                      <td>{item.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Activity;
