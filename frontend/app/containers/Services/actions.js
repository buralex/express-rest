import * as types from "./constants/types";
import {fetchCategories} from "services/api";

import {showLoader} from "containers/App/actions";
import {hideLoader} from "containers/App/actions";
import {serverError} from "containers/App/actions";


/**
 * Load categories
 */
export function loadCategories() {
    return async (dispatch) => {

        try {
            dispatch(showLoader());

            const data = await fetchCategories().then(res => res.data);

            dispatch({
                type: types.LOAD_CATEGORIES_SUCCESS,
                payload: data,
            });

            dispatch(hideLoader());

        } catch (e) {
            dispatch(serverError(e));
        }
    };
}



