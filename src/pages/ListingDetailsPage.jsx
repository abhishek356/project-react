import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import api from "@/api";
import axios from 'axios';
import useFetch from '@/hooks/useFetch';
import { Spinner } from '@/components/ui';
import ListingDetailsCard from '@/components/ListingDetailsCard'
import DataRenderer from '@/components/DataRenderer';

const  ListingDetailsPage = () =>{

    const {listingId} = useParams();

    const abortController =  useRef(null);

    const {data:listing, isLoading, error} = useFetch(`/api/listings/${listingId}`)

    return  <div className = 'container py-4'>
        <DataRenderer error = {error} isLoading = {isLoading}>
            <ListingDetailsCard listing=  {listing} />
        </DataRenderer>
    </div>

}

export default ListingDetailsPage;