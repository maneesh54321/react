import { useEffect, useState } from "react";

export async function httpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, request failed!!"
    );
  }

  return resData;
}

export default function useHttp(url, config, initialData, sendAtInit) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function sendRequest(body) {
    setLoading(true);
    try {
      let resData;
      if (body) {
        resData = await httpRequest(url, { ...config, body });
      } else {
        resData = await httpRequest(url, { ...config });
      }
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong!!");
    }
    setLoading(false);
  }

  if (sendAtInit) {
    useEffect(() => {
      sendRequest();
    }, [url, config]);
  }

  return {
    data,
    error,
    loading,
    sendRequest,
  };
}
