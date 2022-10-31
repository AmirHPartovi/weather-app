import axios from 'axios'



export const api = axios.create({
    baseURL: 'https://api.openweathermap.org'
})


export const handleGetOneDayWeather = (city:string) => {
    return api(`/data/2.5/weather?q=${city}&lang=fa&appid=95d34d260482d3f9f3eecf04d70dcbab&units=metric`).then(data => data.data)
}

export const handleGetFiveDayWeather = (city:string) => {
    return api(`/data/2.5/forecast?q=${city}&lang=fa&appid=95d34d260482d3f9f3eecf04d70dcbab&units=metric`).then(data => data.data.list)
}