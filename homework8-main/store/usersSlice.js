import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'fetchUsers',
    async function (_, {rejectWithValue}) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            if(response.status === 200) {
                return response.data
            }
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const createUser = createAsyncThunk(
    'createUser',
    async function(user, {rejectWithValue}) {
        try {
            await axios.post(`https://jsonplaceholder.typicode.com/users`, {
                user
            })
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    usersItems: [],
    fulfilled: '',
    loading: false,
    error: ''
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.usersItems = action.payload;
                state.loading = false
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(createUser.pending, (state) => {
                state.loading = true
            })
            .addCase(createUser.fulfilled, (state) => {
                state.loading = false
                state.fulfilled = 'Fullfield'
            })
            .addCase(createUser.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})

export default usersSlice.reducer