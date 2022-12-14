import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/'

const API_KEY = '29539407-5b6c5833bd36452119f04e9a6';
// const BASE_URL = 'https://pixabay.com/api/';

// let pageNum = 1;
// let objectValue ='';
// let cardsPerPage = 40;

export async function fetchImages(objectValue, cardsPerPage, pageNum) {
    // console.log('fetchImages first');
    const options = {
        params: {
        key: API_KEY,
        q: objectValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: cardsPerPage,
        page: pageNum,
        }
        
    };

    const response = await axios.get('', options);
    console.log(response);
    return response;
    // return fetch(`${BASE_URL}?key=${API_KEY}&${options}`)
    // .then(response => {
    //     if(!response.ok) {
    //         throw new Error(response.status)
    //     }
    //     return response.json();
    // });
};