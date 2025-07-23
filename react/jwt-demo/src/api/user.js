import axios from './config'

export const getUser = async () => {
    return await axios.get('/user')
}

export const doLogin = async (data) => {
    return await axios.post('/login', data)
}

// export const getUserArticle = async () => {
//     return await axios.get('/user')
// }