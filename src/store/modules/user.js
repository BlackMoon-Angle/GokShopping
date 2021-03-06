import { getToken, setToken, getUser, setUser, logOut } from '@/utils/auth';//引入相关方法用于对本地存储进行数据的操作
import loginApi from "@/api/login"; //引入登录数据请求接口

export default {
    //状态
    state: {
        token: '',
        username: ''
    },

    //方法
    mutations: {
        //存token
        SET_TOKEN(state, token) {
            state.token = token;//存到state
            setToken(token);//存到本地存储
        },

        //存用户名
        SET_USER(state, name) {
            state.username = name;
            setUser(name);
        },

        Remove_inf(state) {
            //清除本地存储
            logOut();
            //清空state的数据
            state.token = '';
            state.username = '';
        }
    },

    //actions可以用于发送异步请求
    actions: {
        //发送ajax验证用户名和密码，成功就返回token
        Login(context, { name, password }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let p = await loginApi.loginData(name, password);
                    if (p.data.flag) {
                        //验证通过，获取到token存入到本地和state里面
                        context.commit('SET_TOKEN', p.data.data.token);//后端生成的token
                        resolve(p.data);//如果成功，把数据返回
                    } else {
                        Message({
                            message: '失败了',
                            type: 'error'
                        })
                    }
                } catch (err) {
                    reject(err);
                }
            })
        },

        //发送ajax(把token发给后端)，获取用户信息
        GetUserInfo({ commit, state }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let p = await loginApi.getUserInf(state.token);
                    // console.log(p);
                    if (p.data.flag) {
                        //验证token通过，返回用户信息,把用户名存到state和本地存储
                        commit('SET_USER', p.data.data.name);
                        resolve(p.data);//成功的回调
                    }
                } catch (err) {
                    reject(err);//失败的回调
                }
            })
        },

        //退出
        Logout({ commit, state }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let p = await logoutApi.loginOut(state.token);
                    if (p.data.flag) {
                        //退出成功，删除本地存储，清空state数据
                        resolve(p.data);
                        commit('Remove_inf');
                    }
                } catch (err) {
                    reject(err);
                }
            });
        }
    },
}