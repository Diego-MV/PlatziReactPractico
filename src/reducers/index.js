const SET_FAVORITE = 'SET_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const REGISTER_REQUEST = 'REGISTER_REQUEST';
const GET_VIDEO_SOURCE = 'GET_VIDEO_SOURCE';
const GET_VIDEO_SEARCH = 'GET_VIDEO_SEARCH';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_FAVORITE:
            if (state.mylist.filter(item => item.id == action.payload.id).length !== 0) {
                return state;
            } else {
                return {
                    ...state,
                    mylist: [...state.mylist, action.payload]
                }
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                mylist: [...(state.mylist.filter(item => item.id !== action.payload.id))]
            }

        case LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload,
            }

        case LOGOUT_REQUEST:
            return {
                ...state,
                user: action.payload,
            }

        case REGISTER_REQUEST:
            return {
                ...state,
                user: action.payload,
            }
        case GET_VIDEO_SOURCE:
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload))
                || state.originals.find(item => item.id === Number(action.payload))
                || [],
            }
        case GET_VIDEO_SEARCH:
            if(action.payload === ''){ 
                return{
                    ...state,
                    searchResult: []
                };
            }
            const list= [
                ...state.trends,
                ...state.originals,
                ...state.documental
            ];
            return{
                ...state,
                searchResult: list.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            };
        default:
            return state;

    }
}

export default reducer;