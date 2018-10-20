import axios from 'axios'

const AI_ROOT = `https://ai.morejust.media`
const AI_DEV_ROOT = `http://localhost:5000`

axios.defaults.baseURL = AI_ROOT

axios.interceptors.response.use(({ data }) => {
  if (!data) return Promise.reject(`Malformed response`)

  const { error, ...rest } = data


  if (error) {
    return Promise.reject(`Error: ${rest.description}`)
  } else {
    return rest
  }
})

export default {
  parse: (url) => {
    return axios.get(`/parse?url=${url}`)
  },

  analyse: async (url) => {
    const parsed = await axios.get(`/parse?url=${url}`)

    return axios.post(`/analyse`, parsed)
  }
}
