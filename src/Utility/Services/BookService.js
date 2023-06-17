import axios from 'axios';

const rootURL = 'http://localhost:3131/';
const bookURL = rootURL + 'book';


// const rootURLBorrow = 'http://localhost:3132/';


export const getBook = async () => {
    const res = await axios.get(bookURL);
    return res.data;
}

export const postBook = async (data) => {
   return await axios.post(bookURL, data);
}



export const updateBook = async (data,id) => {
    return await axios.put(`${bookURL}/${id}`, data);
}

export const deleteSingleBook = async (id) => {
    return await axios.delete(`${bookURL}/${id}`);
}


