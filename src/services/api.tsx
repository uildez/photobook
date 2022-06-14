import axios from 'axios'

import token from '../token/token.js'

const api = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: token
    }
})

export default api