import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dashboard.stayabode.in/api/v1/stayabode/website'
})

export default instance;