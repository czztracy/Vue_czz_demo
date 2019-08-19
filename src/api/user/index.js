import api from '@/api/index'

export function loginByUsername (params = '', name) {
  return api({
    url: `/${name}.json`,
    method: 'GET',
    params
  })
}

export function getInfo (params) {
  return api({
    url: `/${params}.json`,
    method: 'GET',
    params
  })
}
