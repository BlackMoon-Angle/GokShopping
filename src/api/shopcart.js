import request from "@/utils/request"

export default {
    shopcartData() {
        return request({
            url: `/good/shopcart`,
            method: 'get',
            data:{}
        })
    }
}