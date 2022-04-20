import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        account: null,
    },
    reducers: {
        login: (state, action) => {
            state.account = action.payload;
        },
        logout: (state) => {
            state.account = null;
        },
    },
});

export const {login, logout} = authSlice.actions;

export const selectAccount = (state) => state.account.account

export default authSlice.reducer;