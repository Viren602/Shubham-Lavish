import { APIURL } from '../services/axios/ApiEndPoints';

const axios = require('axios');
export const axiosInstance = axios.create({
    baseURL: APIURL
})
axiosInstance.interceptors.response.use(
    response => successHandler(response),
    response => errorHandler(response)
)
const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}

const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
    }
    return request
}
axiosInstance.interceptors.request.use(
    request => requestHandler(request)
)
const errorHandler = (error) => {
    return error
}

const successHandler = (response) => {
    return response
}

export const axiosInstanceWithoutEnrypt = axios.create({
    baseURL: APIURL
})
