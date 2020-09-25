const SET_FAVORITE = 'SET_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const REGISTER_REQUEST = 'REGISTER_REQUEST';
const GET_VIDEO_SOURCE = 'GET_VIDEO_SOURCE';
const GET_VIDEO_SEARCH = 'GET_VIDEO_SEARCH';

export const setFavorite = payload => ({
    type: SET_FAVORITE,
    payload,
});

export const deleteFavorite = payload => ({
    type: DELETE_FAVORITE,
    payload,
});

export const loginRequest = payload => ({
    type: LOGIN_REQUEST,
    payload,
});
export const logoutRequest = payload => ({
    type: LOGOUT_REQUEST,
    payload,
});
export const registerRequest = payload => ({
    type: REGISTER_REQUEST,
    payload,
});
export const getVideoSource = payload => ({
    type: GET_VIDEO_SOURCE,
    payload,
});
export const getVideoSearch = payload => ({
    type: GET_VIDEO_SEARCH,
    payload,
});