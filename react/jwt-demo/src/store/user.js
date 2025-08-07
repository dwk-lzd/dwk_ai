import {
    create
} from 'zustand'
import {
    doLogin
} from '../api/user'

export const useUserStore = create((set) => ({
    user: null,  // 用户信息
    isLogin: false, // 是否登录
    isLoading: false, // 是否加载中
    login: async ({ username = "", password = "" }) => {
        set({
            isLoading: true
        })
        const data = await doLogin({ username, password })
        console.log(data);
        const { token, data: user } = data.data;
        console.log(token, user, '////');
        localStorage.setItem('token', token);
        set({
            user,
            isLogin: true,
            isLoading: false
        })
    },
    logout: () => {
        localStorage.removeItem('token')
        set({
            user: null,
            isLogin: false,
        })
    }
}))