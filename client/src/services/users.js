import axios from 'axios'
import { config } from './config'

export async function login(email, password) {
    try {
        // console.log("login is called")
        // create url
        const url = `${config.server}/user/login`

        // create body
        const body = { email, password }

        // send the POST request
        const response = await axios.post(url, body)
        // console.log(response)

        // return response body
        return response.data
    } catch (ex) {
        console.log(`exception: `, ex)
    }
}