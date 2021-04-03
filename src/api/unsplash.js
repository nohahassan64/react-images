import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID l81te753elIjcBENLtsRnghk1uY8veCBI5rZ2TiuxP8'
      }
});