import { useEffect, useState } from "react"
import { getAllSubs } from "../services/getAllSubs"
import { Sub } from '../types'


const useGetAllSubs = () => {
  const [subs, setSubs] = useState<Array<Sub>>([])
  useEffect(() => {
    // const fetchSubs = async (): Promise<SubsResponseFromApi> => {
    //   const res = await fetch('https://my.api.mockaroo.com/users.json?key=7a1a7040')
    //   return await res.json()
    // }

    // const fetchSubs = async () => {
    //   return axios.get<SubsResponseFromApi>('https://my.api.mockaroo.com/users.json?key=7a1a7040')
    //     .then(response => response.data)
    // }
    getAllSubs().then(setSubs)
  }, [])
  return {
    subs,
    setSubs
  }
}

export default useGetAllSubs