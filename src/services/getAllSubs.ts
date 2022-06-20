import axios from 'axios'
import { SubsResponseFromApi, Sub } from '../types'

const fetchSubs = async (): Promise<SubsResponseFromApi> => {
  return axios.get('https://my.api.mockaroo.com/users.json?key=7a1a7040')
    .then(response => response.data)
}

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
  return apiResponse.map(subsFromApi => {
    const { nick, months: subMonths, profileUrl: avatar, description } = subsFromApi
    return { nick, description, subMonths, avatar }
  })
}

export const getAllSubs = async () => {
  const apiResponse = await fetchSubs()
  return mapFromApiToSubs(apiResponse)
}

