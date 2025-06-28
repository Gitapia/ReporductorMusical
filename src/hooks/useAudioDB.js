import { useState, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = 'https://theaudiodb.com/api/v1/json/2/'

export function useAudioDB(endpoint, params = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${endpoint}`, { params })
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint, JSON.stringify(params)])

  return { data, loading, error }
}