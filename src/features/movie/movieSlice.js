import {createSlice} from '@reduxjs/toolkit';

// initiallly setting movies an empty array
const initialState = {
    movies:[]
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies=action.payload;
        }
    }
})

// set movies is the action we export
export const { setMovies } = movieSlice.actions;
export const selectMovies = (state)=>state.movie.movies;

export default movieSlice.reducer;