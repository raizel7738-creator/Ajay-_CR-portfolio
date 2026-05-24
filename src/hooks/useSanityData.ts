import { useState, useEffect } from "react"
import { client } from "../lib/sanityClient"

interface UseSanityDataResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useSanityData<T>(query: string): UseSanityDataResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    client
      .fetch<T>(query)
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
