// search 模块
import axios from './config'

export const getSuggestList = async (keyowrd) => {
    return await axios.get(`/search?keyword=${keyowrd}`)
}

export const getHotList = async () => {
    return await axios.get('/hotlist')
}