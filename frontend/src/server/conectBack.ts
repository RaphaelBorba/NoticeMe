import axios from "axios"
import { SignInForm, SignUpForm } from "../protocols"

const UrlAxios = "http://localhost:4000"

function createConfig(token: string) {

  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
}

export function postSignInBack(body: SignInForm) {

  return axios.post(`${UrlAxios}/signIn`, body)
}

export function postSignUpBack(body: SignUpForm) {

  return axios.post(`${UrlAxios}/signUp`, body)
}

export function getUserData(id: string| any, token: string|any) {

  return axios.get(`${UrlAxios}/user/${id}`, createConfig(token))
}

export function getPostsForHome() {

  return axios.get(`${UrlAxios}/post/home`)
}

export function postDescription(body: Object | any, token: string | any ) {

  return axios.post(`${UrlAxios}/user/description`, body, createConfig(token))
}

export function postPost(body: Object | any, token: string | any ) {

  return axios.post(`${UrlAxios}/post`, body, createConfig(token))
}

