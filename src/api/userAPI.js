import axios from 'axios';

// const endpoint = 'http://localhost:4000/api';
const endpoint = `${process.env.REACT_APP_API_URL}`

const register = (user) => {
    return axios.post(`${endpoint}/register`, user)
        .then(res => res)
}

const login = (user) => {
    return axios.post(`${endpoint}/login`, user)
        .then(res => res)
        .catch(err => console.log(err))
}

export default {
    register,
    login
}