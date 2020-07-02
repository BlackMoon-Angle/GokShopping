import request from "@/utils/request"

export default {
    homeData() {
        return request({
            url: `/good/home`,
            method: 'get'
        })
    }
}