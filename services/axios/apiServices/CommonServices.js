import { axiosPost, axiosPostAuthorize } from '../AxiosRequests';
import { SendInquiryToAdminForZyden } from '../ApiEndPoints';

export default class CommonServices {
    async sendInquiryToAdminForZyden(request) {
        return axiosPost(SendInquiryToAdminForZyden, request);
    }
}