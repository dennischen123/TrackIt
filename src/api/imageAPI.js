import axios from 'axios';

const endpoint = 'http://localhost:4000/api/users'

{/* <form action="http://localhost:4000/api/upload" method="post" encType="multipart/form-data"> */ }

const create = (uid, wid, body) => {
    console.log("making a post request to create image...")
    return axios.post(`${endpoint}/${uid}/warranties/${wid}/upload`, body)
        .then(res => res)
        .catch(err => console.log(err))
}

export default {
    create
}