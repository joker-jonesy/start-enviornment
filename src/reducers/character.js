import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCharacters = createAsyncThunk('allCharacters', async ()=>{
    try {
        const {data} = await axios.get('/api/characters');
        return data;
    } catch (err){
        console.log(err)
    }
})

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCharacters.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export default characterSlice.reducer;