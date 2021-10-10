import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CTextarea,
} from "@coreui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Modal from "react-awesome-modal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import $axios from "../../api";
import { toast } from "react-toastify";
require("react-big-calendar/lib/css/react-big-calendar.css");
const localizer = momentLocalizer(moment);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9,
  },
};
const initialData = {
  id: null,
  notes: null,
  created_date: null,
  created_by: null,
  created_form: null,
  type: null,
};
const EventCalendar = ({}) => {
  const [detailData, setDetailData] = useState(initialData);
  const [errorData, setErrorData] = useState([]);
  const [event, setEvent] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = () => {
    $axios.get(`report/note`).then((res) => {
      let datas = [];
      for (const it of res.data.data) {
        datas.push({
          id: it.id,
          title: it.notes,
          start: it.created_form,
          end: it.created_form,
          created_form: it.created_form,
          created_by: it.created_by,
          allDay: true,
          resource: "TEST",
        });
      }
      setEvent(datas);
    });
  };
  const handleRangeHange = (e) => {
    let start = new Date();
    let end = new Date();
    if (e.length > 0) {
      end = new Date(Math.max.apply(null, e));
      start = new Date(Math.min.apply(null, e));
    } else {
      start = e.start;
      end = e.end;
    }
    console.log(start);
  };

  const handleSelectEvent = (e) => {
    setDetailData({
      id: e.id,
      notes: e.title,
      type: "edit",
      created_by: e.created_by,
      created_form: e.start,
    });
    setVisible(true);
  };
  const handleSelectDate = (e) => {
    setDetailData({
      notes: "",
      type: null,
      created_by: "",
      created_form: e.start,
    });
    setVisible(true);
  };

  const handleCloseModal = () => {
    setDetailData({ initialData });
    setVisible(false);
  };
  const handleSubmit = () => {
    var required_data = ["created_by", "notes"];
    var error = {};
    for (const prop of required_data) {
      if (!detailData[prop]) {
        error[prop] = true;
      }
    }
    setErrorData(error);
    if (Object.keys(error).length > 0) {
      return;
    }

    let data = {
      notes: detailData.notes,
      created_by: detailData.created_by,
      created_form: moment(detailData.created_form).format("YYYY-MM-DD"),
    };

    console.log(data);
    if (detailData.id) {
      data.id = detailData.id;
      $axios.post(`report/note`, data).then((res) => {
        loadEvent();
        if (res.data.error) {
          toast.error(`${res.data.message}`);
        } else {
          toast.success(`${res.data.message}`);
        }
      });
    } else {
      $axios.put(`report/note`, data).then((res) => {
        loadEvent();
        if (res.data.error) {
          toast.error(`${res.data.message}`);
        } else {
          toast.success(`${res.data.message}`);
        }
      });
    }
    setDetailData({ initialData });
    setVisible(false);
  };
  const handleDelete = () => {
    let data = { id: detailData.id };
    $axios.delete(`report/note`, { data: data }).then((res) => {
      if (res.data.error) {
        toast.error(`${res.data.message}`);
      } else {
        toast.success(`${res.data.message}`);
      }
    });
    loadEvent();
    setDetailData({ initialData });
    setVisible(false);
  };
  return (
    <>
      <CCard>
        <CCardBody>
          <Calendar
            defaultView={"month"}
            localizer={localizer}
            events={event}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={(e) => handleSelectEvent(e)}
            selectable={true}
            onSelectSlot={(e) => handleSelectDate(e)}
            onRangeChange={(e) => handleRangeHange(e)}
          />
        </CCardBody>
      </CCard>
      <Modal
        visible={visible}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => handleCloseModal()}
      >
        <CCard>
          <CCardHeader>
            <h4
              className="card-title mb-0"
              style={{ "text-transform": "capitalize" }}
            >
              {detailData.type == "edit" ? "Edit" : "Add"} Event
            </h4>
          </CCardHeader>
          <CCardBody>
            <CForm
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
            >
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">
                    Notes <span class="text-danger">*</span>
                  </CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    invalid={errorData.notes}
                    value={detailData.notes ?? " "}
                    onChange={(e) =>
                      setDetailData({
                        ...detailData,
                        notes: e.target.value,
                      })
                    }
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">
                    Name <span class="text-danger">*</span>
                  </CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    invalid={errorData.created_by}
                    value={detailData.created_by ?? " "}
                    onChange={(e) =>
                      setDetailData({
                        ...detailData,
                        created_by: e.target.value,
                      })
                    }
                  />
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={() => handleSubmit()}
            >
              Submit
            </CButton>
            &nbsp;
            {detailData.type == "edit" && (
              <CButton onClick={() => handleDelete()} size="sm" color="danger">
                Delete
              </CButton>
            )}
          </CCardFooter>
        </CCard>
      </Modal>
    </>
  );
};

export default EventCalendar;
