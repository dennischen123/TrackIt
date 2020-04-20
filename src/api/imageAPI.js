import axios from 'axios';

// const endpoint = 'http://localhost:4000/api/users'
const endpoint = `${process.env.REACT_APP_API_URL}/users`

const create = (uid, wid, body) => {
    console.log("making a post request to create image...")
    return axios.post(`${endpoint}/${uid}/warranties/${wid}/upload`, body)
        .then(res => res)
        .catch(err => console.log(err))
}

export default {
    create
}