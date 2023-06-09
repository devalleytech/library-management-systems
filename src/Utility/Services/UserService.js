import axios from 'axios';

const rootURL = 'http://localhost:3030/';
const userURL = rootURL + 'user';

export const getUser = async () => {
    const res = await axios.get(userURL);
    return res.data;
}

export const postUser = async (data) => {
   return await axios.post(userURL, data);
}

export const updateUser = async (data,id) => {
    return await axios.put(`${userURL}/${id}`, data);
}



