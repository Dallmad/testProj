import axios from 'axios';

export const getTZ = axios.create({
    baseURL: 'https://worldtimeapi.org/api/timezone'
})