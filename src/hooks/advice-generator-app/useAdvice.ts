import axios from 'axios'
import { useState, useEffect } from 'react'

interface IAdvice {
  slip: { id: number; advice: string }
}

const useAdvice = () => {
  const [advice, setAdvice] = useState<IAdvice | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getNewAdvice = () => {
    setLoading(true)

    axios
      .get('https://api.adviceslip.com/advice', {
        params: { t: new Date() },
      })
      .then((res) => {
        setAdvice(res?.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }

  useEffect(() => getNewAdvice(), [])

  return { advice, loading, error, getNewAdvice }
}

export default useAdvice
