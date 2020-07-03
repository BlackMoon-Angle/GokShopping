import request from "@/utils/request"

export default {
    classificationData() {
        return request({
            url: `/good/classification`,
            method: 'get',
            data:{}
        })
    }
}