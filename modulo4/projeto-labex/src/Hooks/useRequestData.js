import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const datas = async () => {
        try {
            const res = await axios.get(url)
            setData(res.data.trips)
            setIsLoading(false)
        } catch (err) {
            setError(err)
            setIsLoading(false)
        }
    }
    datas()
  }, [url]);

  return [data, isLoading, error];
};