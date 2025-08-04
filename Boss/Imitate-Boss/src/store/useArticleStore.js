import { create } from 'zustand'
import { getArticle } from '@/api/article'
export const useArticleStore = create((set, get) => ({
    articles: [],
    page: 1,
    Loading: false,
    fetchArticle: async () => {
        if (get().Loading) return
        set({ Loading: true })
        const res = await getArticle(get().page)
        const newArticles = res.data
        set(state => ({
            articles: [...state.articles, ...newArticles],
            page: state.page + 1,
            Loading: false
        }))
    }
}))