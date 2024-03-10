import { 
    RESULTS_ERROR, 
    SEARCH_REQUEST, 
    SEARCH_SUCCESS, 
    SEARCH_TERM,
    TActions,  } from "./actions";


type TInitialState = {
    results: any;
    fetchSearchRequest: boolean;
    fetchSearchError: boolean;
    query: string;
}

const initialState: TInitialState = {
    results: [],
    fetchSearchRequest: false,
    fetchSearchError: false,
    query: '',
};

export const searchReducer = (state = initialState, action: TActions): TInitialState => {
switch (action.type) {
    case SEARCH_REQUEST: {
    return {
        ...state,
        fetchSearchRequest: true,
    };
    }

    case SEARCH_SUCCESS: {
    return {
        ...state,
        fetchSearchRequest: false,
        fetchSearchError: false,
        results: action.results,
    };
    }

    case RESULTS_ERROR: {
    return {
        ...state,
        fetchSearchRequest: false,
        fetchSearchError: true,
        results: [],
    };
    }

    case SEARCH_TERM: {
        return {
            ...state,
            query: action.query,
        };
        }

    default: {
    return state;
    }
}
};