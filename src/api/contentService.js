import axios from 'axios'

function contentService (contentName) {
  return axios.get(`/public/content/${contentName}.json`)
}

export default contentService
