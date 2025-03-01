import { useState, useEffect, useRef, useMemo } from "react";
import api from "@/api";
import axios from 'axios'
import { getItem, setItem } from "@/lib/utils/localStorage";
import { date } from "zod";

const STALE_DATA = 5*60*1000;
const useFetch =(url, options)=>{
    
const [data, setData] = useState();
const [isLoading,  setIsLoading] = useState(true);
const [error, setError] = useState(null);

const abortController = useRef(null);

const storageKey = useMemo(()=>{

    if(!options?.params)
    {
        return url;
    }

    return  url+"?"+JSON.stringify(options.params);

},[options, url]);

useEffect(()=>{ 

    const fetchData = async ()=>{

        const cachedData = getItem(storageKey);
        const currentTime = new Date().getTime();

        if(cachedData && currentTime - (cachedData.lastFetched < STALE_DATA))
        {
            setData(cachedData.data);
            setIsLoading(false);
            return
        }

        abortController.current = new AbortController();
        setError(null)
        setIsLoading(true)
        try{
            let response = await api.get(url,{
                ...options,
                signal: abortController.current?.signal
            })
            setData(response.data);

        }
        catch(error)
        {
            if(axios.isCancel(error))

                {
                    return;
                }
                setError('Something went wrong.Please try again later..');
        }
        finally{
            setIsLoading(false);
        }
    }
    fetchData();
    return (()=>{abortController.current?.abort()})

},[url, options, storageKey])

useEffect(()=>{
    if(!data)
    {
        return;
    }
    setItem(storageKey, {
        lastFetched: new Date().getTime(),
        data
    })
},[data, storageKey])
    
return {data, isLoading, error};

}

export default useFetch;