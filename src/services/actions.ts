import { User } from "../components/SearchResults/SearchResults";
import { searchUsers } from "./search-api";
import { AppDispatch, AppThunk } from "./store";

export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const RESULTS_ERROR = "RESULTS_ERROR";
export const SEARCH_TERM = "SEARCH_TERM";

export interface IResult {
    users: Array<User>;
    limit: number;
    skip: number; 
    total: number;
}

export interface IRequest {
    readonly type: typeof SEARCH_REQUEST;
}

export interface ISuccess {
    readonly type: typeof SEARCH_SUCCESS;
    results: Array<IResult>;
}

export interface ITerms {
    readonly type: typeof SEARCH_TERM;
    query: string;
}

export interface IErrorResults {
    readonly type: typeof RESULTS_ERROR;
}

export type TActions =
    | IRequest
    | ISuccess
    | IErrorResults
    | ITerms;

export const getSearch: AppThunk = (options) => (dispatch: AppDispatch) => {
    dispatch({ type: SEARCH_REQUEST });

    searchUsers(options)
        .then((res) => {
            dispatch({
                type: SEARCH_SUCCESS,
                results: res,
            });
        })
        .catch(() => dispatch(resultsError()));
}

const resultsError = (): IErrorResults => ({
    type: RESULTS_ERROR,
});