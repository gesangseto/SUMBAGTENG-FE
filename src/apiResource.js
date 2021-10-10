import axios from "axios";

const $axiosResource = axios.create({
  baseURL: `${process.env.REACT_APP_API_RESOURCE}`,
  headers: {
    // 'Authorization': localStorage.getItem('token') != 'null' ? 'Bearer ' + localStorage.getItem('token') : '',
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

$axiosResource.defaults.timeout = 600000;

export default $axiosResource;
