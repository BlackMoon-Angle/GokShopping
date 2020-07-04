import request from "@/utils/request"

export default {
    shopcartData() {
        return request({
            url: `/good/shopcart`,
            method: 'get',
            data: {}
        })
    },
    // shopcartOne() {
    //     return request({
    //         url: `/good/shopcartOne`,
    //         method: 'get',
    //         data: {}
    //     })
    // },
    // add_shopcart(shop_info) {
    //     return request({
    //         url: `/good/addshopcart`,
    //         method: 'post',
    //         data: {
    //             shop_info
    //         }
    //     })
    // },
    // delete_shopcart(shop_info) {
    //     return request({
    //         url: `/good/deleteshopcart`,
    //         method: 'post',
    //         data: {
    //             shop_info
    //         }
    //     })
    // }
}