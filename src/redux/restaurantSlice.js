import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//for calling api s in redux /slice we use thunk 
//thunk is a method provided by the redux to make api calls
//api calls r asynchronoud functn , so thunks make use of promises 

//funtcn to call Api

export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant', () => {
    const result = axios.get('/restaurant.json').then(response => response.data)
    console.log("result in slice")
    console.log(result);
    return result
})
const restaurantSlice = createSlice({
    name: "restaurantList",
    initialState: {
        loading: false,            //pending
        allRestaurant: [],        // resolve
        err: "",
        searchRestaurant: []  //reject
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.loading = false
            state.allRestaurant = action.payload
            state.searchRestaurant = action.payload
            state.err = ""
        })
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false
            state.allRestaurant = []
            state.err = action.err.message
        })
    },
    reducers: {
        search: (state, action) => {
            state.allRestaurant.restaurants = state.allRestaurant.filter(
                item => item.neighborhood.toLowerCase().includes(action.payload)
            )
        }
    }
})

export default restaurantSlice.reducer;
export const { search } = restaurantSlice.actions