import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://ecuidhamus-ntc.web.ua.pt/nodejs/'
    //baseURL: 'http://localhost:7000/'
});

export default instance;