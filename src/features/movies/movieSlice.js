import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { API_KEY } from "../../common/apis/movieApiKey";

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
    loader: false
}

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (search) => {

    const response = await movieApi.get(`?apiKey=${API_KEY}&s=${search}&type=movie`)
        .catch(err => {
            console.log('Error :', err)
        })

    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (search) => {

    const response = await movieApi.get(`?apiKey=${API_KEY}&s=${search}&type=series`)
        .catch(err => {
            console.log('Error :', err)
        })

    return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    console.log(id)
    const response = await movieApi.get(`?apiKey=${API_KEY}&i=${id}&$plot=full`)
        .catch(err => {
            console.log('Error :', err)
        })

    return response.data;
})

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
            console.log('pending')
            state.loader = true;
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fulfilled')
            return { ...state, movies: payload, loader: false }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('fullfiled')
            return { ...state, shows: payload, loader: false }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log('fullfiled')
            return { ...state, selectedMovieOrShow: payload }
        }
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getLoader = (state) => state.movies.loader;
export const getSelectedMovieorShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;