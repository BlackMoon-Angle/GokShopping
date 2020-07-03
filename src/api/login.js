import request from "@/utils/request"

export default {
    loginData(username, password) {
        return request.get(`/user/login`,{
            params: {
                username,
                password
            }
        })
    },
}