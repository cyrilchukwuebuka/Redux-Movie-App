import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { API_KEY, I_KEY } from "../../common/apis/movieApiKey";

const initialState = {
    movies: {},
    shows: {}
}

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = 'harry';

    const response = await movieApi.get(`?i=${I_KEY}&apiKey=${API_KEY}&s=${movieText}&type=movie`)
        .catch(err => {
            console.log('Error :', err)
        })

    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const seriesText = 'Friends';

    const response = await movieApi.get(`?i=${I_KEY}&apiKey=${API_KEY}&s=${seriesText}&type=series`)
        .catch(err => {
            console.log('Error :', err)
        })

    return response.data;
})

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload
        }
    },
    extraReducers: 
    {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fullfiled')
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('fullfiled')
            return { ...state, shows: payload }
        }
    }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;