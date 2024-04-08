import {createSlice} from "@reduxjs/toolkit"
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailer:null,
        PopularMovies:null,
        TopRatedMovies:null,
        Upcoming:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailer:(state,action)=>{
          state.trailer=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addUpcoming:(state,action)=>{
            state.Upcoming=action.payload;
        },
    }
})
export const{addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcoming}=movieSlice.actions;
export default movieSlice.reducer;