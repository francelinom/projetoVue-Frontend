import axios from 'axios'

import {
  baseApiUrl
} from '@/global'

export default axios.create({
  baseURL: baseApiUrl,
})