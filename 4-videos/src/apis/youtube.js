import axios from 'axios'
const KEY = 'AIzaSyA1xYTJg2ynmqemSPXgWFnAcZsxvrm0QEg'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    }
})