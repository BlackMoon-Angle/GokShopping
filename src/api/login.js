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
    token_login(token){
        return request.get(`/user/verify`,{
            params: {
                token
            }
        })
    }
}