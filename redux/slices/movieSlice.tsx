import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popular: [],
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
});
