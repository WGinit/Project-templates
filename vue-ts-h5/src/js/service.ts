import { get } from './http'

export const getAccessToken = (param: object) => {
  return get('gettoken', param, true)
}
