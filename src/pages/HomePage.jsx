import {useRef,useEffect, useState, useMemo, useCallback } from "react"
import ListingFilters from "@/components/ListingFilters"
import ListingList from "@/components/ListingList"
import { Separator, Spinner } from "@/components/ui"
import DataRenderer from "@/components/DataRenderer"
import useFetch from "@/hooks/useFetch"
import api from "@/api"
import axios from 'axios'



//https://email.tx.teachable.com/c/eJw8kM2upCAUhJ8Gd3YETgMuXEzS8TXIEQ4NaRWHn5l5_Ik3N3dblXz1pfyC8wY8wEAL11LME4CeBzow7baQo3Q1m_zCNRitwYhpiEvwEpSent54uSmnuDCaIwXcDDebCkNalAacFA_PpxPGcgPST5ORoIAzmAL5XHB8Rxxr8vRJv0dPAfveRhXcDLPajBo_5Sj1cZsM-xJbuyqTv5hYmVhdrp7Osea9t5TP-miELuK208Plg4n1yrXZqxcXsZJ1uZdKTKwC1PyUwOTa22Fr7sURk6_auqez2XuLChPqbg_yqR9Mvr7O-A4dHhem98nk64d-5pZCcnib2L-pRdvwn_XUMO11KAtuMdVIH6M0zILB9L6Bt-jwZxH_AwAA__89rX-u

const HomePage =()=>{

    
    const [filters,setFilters] = useState({
        dates: undefined,
        guests: 0,
        search:''
    })

const fetchOptions = useMemo(()=>({params:filters}),[filters])

  const {data:listings,
        isLoading,
        error} = useFetch('/api/listings',fetchOptions)

    const handleFilters = useCallback((filters) =>{

            setFilters(filters)

    },[])



    return (<div className ='container py-4'>
        <div className="mb-4">
            <ListingFilters onChange ={handleFilters}/>
            <Separator className = 'my-4' />
        </div>
        <DataRenderer error = {error} isLoading={isLoading}>
            <ListingList listings={listings}/>
        </DataRenderer>
    </div>)
}

export default HomePage