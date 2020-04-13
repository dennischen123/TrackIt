import axios from 'axios';

const endpoint = 'http://localhost:/4000/users'

const index = (uid) => {
    return axios.get(`${endpoint}/${uid}/warranties`)
        .then(res => res)
        .catch(err => console.log(err))
}

const create = (uid, warranty) => {
    return axios.post(`${endpoint}/${uid}/warranties`, warranty)
        .then(res => res)
        .catch(err => console.log(err))
}

const destroy = (uid, wid) => {
    return axios.delete(`${endpoint}/${uid}/warranties/${wid}`)
        .then(res => res)
        .catch(err => console.log(err))
}

const show = (uid, wid) => {
    return axios.get(`${endpoint}/${uid}/warranties/${wid}`)
        .then(res => res)
        .catch(err => console.log(err))
}

const update = (uid, wid, body) => {
    return axios.put(`${endpoint}/${uid}/warranties/${wid}`, body)
        .then(res => res)
        .catch(err => console.log(err))
}

export default {
    index,
    create,
    destroy,
    show,
    update,
}