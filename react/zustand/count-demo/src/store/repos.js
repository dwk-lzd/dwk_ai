// 请求
import {
    getRepoList
} from '../api/repo'
import {
    create
} from 'zustand'

export const useRepoStore = create((set) => ({
    repos: [],
    loading: false,
    error: null,

    fetchRepos: async (user) => {
        set({ loading: true, error: null });
        try {
            const res = await getRepoList(user)
            // console.log(res);
            set({ repos: res.data, loading: false })
        } catch (err) {
            set({ error: err.message, loading: false })
        }
    }

}))