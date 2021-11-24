import axios from "axios"

const baseURL = 'https://containersapinodejs.herokuapp.com/api/';
const containersApi = axios.create({baseURL});

export default containersApi;