import {get} from './http'

const service = {}

service.getPieData = (data) => {
  return get('qyUser', data)
}

service.getRateData = (data) => {
  return get('qyData', data)
}

export default service