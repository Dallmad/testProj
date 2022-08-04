import axios from 'axios'

export const timeZones = axios.create({
    baseURL: 'https://worldtimeapi.org/api/timezone'
})

export const setNote = axios.create({
    baseURL: 'https://smtp-server-dallmad.herokuapp.com/'
})