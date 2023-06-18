import axios from 'axios';

const rootURL = 'http://localhost:3133/';
const notificationURL = rootURL + 'notification';


// const rootURLBorrow = 'http://localhost:3132/';


// export const getBook = async () => {
//     const res = await axios.get(bookURL);
//     return res.data;
// }

export const postNotification = async (data) => {
   return await axios.post(notificationURL, data);
}



// export const updateBook = async (data,id) => {
//     return await axios.put(`${bookURL}/${id}`, data);
// }

// export const deleteSingleBook = async (id) => {
//     return await axios.delete(`${bookURL}/${id}`);
// }


