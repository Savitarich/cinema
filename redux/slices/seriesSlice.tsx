import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popularSerieses: [],
};

const seriesSlice = createSlice({
    name: "series",
    initialState,
    reducers: {},
});
