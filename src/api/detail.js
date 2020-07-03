import request from "@/utils/request"

export default {
    detailData() {
        return request({
            url: `/good/detail`,
            method: 'get',
            data:{}
        })
    }
}