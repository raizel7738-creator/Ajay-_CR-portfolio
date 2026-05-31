import { useState, useEffect } from "react"
import { fetchSanityQuery } from "../lib/fetchSanity"

export function useSanityData(query) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchSanityQuery(query)
      .then((result) => {
        setData(result)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [query])

  return { data, loading, error }
}
