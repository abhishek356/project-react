import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "@/api"

const initialState  = {
    listings: [],
    error: null,
    status: 'idle'
}

const  listingSlice = createSlice({
    name:'listings',
    initialState,
    reducers:{}
})

export  const fetchListings = createAsyncThunk(
    'listings/fetchListings',
    async (options) =>{

      const response = await  api.get("/api/listings", options);
      return  response.data

    }
)

export default listingSlice.reducer;