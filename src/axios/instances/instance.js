import axios from 'axios'

export const axiosClientInstance = axios.create({ baseURL: 'http://localhost:4000/' });
export const axiosDriverInstance = axios.create({ baseURL: 'http://localhost:4000/driver/' });
export const axiosAdminInstance = axios.create({ baseURL: 'http://localhost:4000/admin/' }); 