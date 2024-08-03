import { useEffect, useState } from "react";


/* const existsBody = (objectName) => {
    return JSON.stringify(objectName) === "{}";
  }; */

const useFetchBolets = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

   /* const isBody = existsBody(requestOptions) */

    useEffect(() => {
        setLoading(true);
       fetch(url)
            .then(response => response.json())
            .then(resp => {
                setError(null);
                setData(resp);
            })
            .catch(error => {
                setData(null);
                setError(error);
            })
            .finally( () => {
              setLoading(false);
            })
    }, [url]);

    return {data, loading, error};

}

export default useFetchBolets;