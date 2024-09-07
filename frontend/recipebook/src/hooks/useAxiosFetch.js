import { useEffect, useState } from "react";
import axios from "axios";
import { constantsObj } from "../utils/constants";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: constantsObj.BASE_API_URL,
  timeout: 20000,
});

export const useAxiosFetch = (url, options = undefined) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!options || options === undefined) {
    options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axiosInstance.get(url, options);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, options]);

  return { data, error, loading };
};
