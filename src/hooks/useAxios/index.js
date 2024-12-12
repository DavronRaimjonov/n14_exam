import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = ({ url, method = "GET" }) => {
  const [data, setData] = useState([]);
  const [loading, setLaoding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        setData(data.data);
        setLaoding(false);
      })
      .catch((error) => {
        setError(error.message);
        setLaoding(false);
      });
  }, []);
  return { data, loading, error };
};
