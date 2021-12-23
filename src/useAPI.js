import { useContext, useEffect, useState } from "react";
import APIContext from "./APIContext";

export default function useAPI(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { onRequest } = useContext(APIContext);

  useEffect(()=>{
    onRequest(url).then(data=>{
      setData(data);
    }).catch(error=>{
      setError(error.message);
    }).finally(_=>setIsLoading(false));
  } , [setData , setError , onRequest, setIsLoading]);

  return { isLoading, data, error };
}
