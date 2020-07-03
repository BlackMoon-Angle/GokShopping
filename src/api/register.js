import request from "@/utils/request"

export default {
    registerData(username, password) {
        return request.post(`/user/register`,
            {
                username,
                password
            }
        )
    }
}