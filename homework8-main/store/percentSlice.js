import {createSlice} from "@reduxjs/toolkit";
import {decrement, increment} from "./countSlice";
import {getUsers} from "./usersSlice";



const percentSlice = createSlice({
    name: "percentSlice",
    initialState: {
        percent: 0,
        percentLoading: false
    },
    extraReducers: builder => {
        builder.addCase(increment, state => {
            state.percent += 1
        })
        builder.addCase(decrement, state => {
            state.percent -= 1
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.percentLoading = false
        })

        builder.addCase(getUsers.pending, (state, action) => {
            state.percentLoading = true
        })

    }
})



export default percentSlice.reducer