import axios from 'axios'

export const userSignup = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}user/auth/register`, data)
}


export const userLogin = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}user/auth/login`, data)
}

export const userQuiz = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}quiz/api/get_quiz`, data)
}
