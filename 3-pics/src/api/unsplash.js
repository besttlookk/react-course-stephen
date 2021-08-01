import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID ne_YTKs1mTqYbWDboDxmdIu5mHzebbwtQwG5W-7IR8o'
    }
})