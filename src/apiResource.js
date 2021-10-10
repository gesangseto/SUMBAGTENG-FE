import axios from "axios";

const $axiosResource = axios.create({
  baseURL: `${process.env.REACT_APP_API_RESOURCE}`,
  headers: {
    // 'Authorization': localStorage.getItem('token') != 'null' ? 'Bearer ' + localStorage.getItem('token') : '',
    "Content-Type": "application/json",
    user_id: `${localStorage.getItem("user_id")}`,
    token: `${localStorage.getItem("token")}`,
  },
});

$axiosResource.defaults.timeout = 600000;

export default $axiosResource;
