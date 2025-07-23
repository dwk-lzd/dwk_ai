import axios from './config'

export const getUser = async () => {
    return await axios.get('/user')
}

export const getUserArticle = async () => {
    return await axios.get('/user')
}