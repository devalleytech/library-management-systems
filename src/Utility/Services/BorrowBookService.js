import axios from 'axios';

const rootURL = 'http://localhost:3132/';

// const rootURLBorrow = 'http://localhost:3132/';
const borrowedbookURL = rootURL + 'borrowedBook';

export const getBorrowedBook = async () => {
    const res = await axios.get(borrowedbookURL);
    return res.data;
}

// export const postBook = async (data) => {
//    return await axios.post(bookURL, data);
// }

export const postBorrowedbook = async (data) => {
   return await axios.post(borrowedbookURL, data);
}

// export const updateBook = async (data,id) => {
//     return await axios.put(`${bookURL}/${id}`, data);
// }

// export const deleteSingleBook = async (id) => {
//     return await axios.delete(`${bookURL}/${id}`);
// }


