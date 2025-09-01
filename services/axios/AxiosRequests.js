import { encryptionAPI } from '../../utils/Encryption';
import { APIURL } from './ApiEndPoints';
import { axiosInstance } from '../../utils/AxiosInterceptor';
import { IsEncryption, WebToken } from '../../utils/AppSetting';

export function axiosPost(url, request) {
    var data = { data: (IsEncryption) ? encryptionAPI(request, 1) : request };
    return axiosInstance.post(APIURL + url, data);
}

export function axiosPostForAllFormsLink(url, request) {
    let token = localStorage.getItem('Token');
    let headers = { Authorization: `Bearer ${token}` };
    var data = IsEncryption ? encryptionAPI(request, 1) : request;
    return axiosInstance.post(APIURL + url, data, { headers });
}

export function axiosPostWithDecryptId(url, request) {
    let headers = { Authorization: `Bearer ${WebToken}` };
    var data = IsEncryption ? encryptionAPI(request, 1) : request;
    return axiosInstance.post(APIURL + url, data, { headers });
}

export function axiosGet(url, param) {
    let headers = { Authorization: `Bearer ${WebToken}` };
    return axiosInstance.get(APIURL + url?.replace("{0}", (IsEncryption) ? encryptionAPI(param, 0) : param), { headers });
}

export function axiosgetDynamicFormList(url, param) {
    let headers = { Authorization: `Bearer ${WebToken}` };
    return axiosInstance.get(APIURL + url, { headers });
}

export function axiosGetMultiParams(url, params) {
    let headers = { Authorization: `Bearer ${WebToken}` };

    // Ensure params is defined and iterable
    if (params && typeof params.forEach === 'function') {
        params.forEach((value, key) => {
            url = url.replace(`{${key}}`, (IsEncryption) ? encryptionAPI(value, 0) : value);
        });
    } else {
        console.error("axiosGetMultiParams: params is not iterable", params);
    }

    return axiosInstance.get(APIURL + url, { headers });
}

export function axiosPostWithoutEncryption(url, request, isFormData) {
    if (isFormData) {
        let headers = {
            Authorization: `Bearer ${WebToken}`,
            'content-type': 'multipart/form-data',
        };
        return axiosInstance.post(APIURL + url, request, { headers });
    }
    return axiosInstance.post(APIURL + url, request);
}
