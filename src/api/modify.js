import request from "@/utils/request"

export default {
    modifyData(username, password, new_passsword) {
        return request.put(`/user/modify`,
            {
                user: {
                    username,
                    password
                },
                password: {
                    new_passsword
                }
            }
        )
    }
}