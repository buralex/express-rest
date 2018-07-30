
import {
    fetchSuggestedFriends,
    fetchSuggestedCompanies,
    fetchSuggestedProducts,
    loginRequest,
    fetchEnquiryTypes,
    postToSupport,
    testRequest,
} from "services/api";

import * as modalNames from 'components/modals/names';
import * as types from './constants/types';

import omit from "lodash/omit";
import {FIELDS as supportFields} from "components/SupportForm/constants/fields";

/**
 * Loader show
 */
export function showLoader() {
    return {
        type: types.SHOW_LOADER,
    };
}

/**
 * Loader hide
 */
export function hideLoader() {
    return {
        type: types.HIDE_LOADER,
    };
}

/**
 * Login
 */
export function login(values) {
    return async (dispatch) => {

        const {email, password} = values;

        try {
            dispatch(showLoader());

            const data = await loginRequest({ email, password }).then(res => res.data);

            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: data,
            });

            dispatch(hideLoader());
            return data

        } catch (e) {
            dispatch(serverError(e));
        }
    };
}

/**
 * Login
 */
export function test(values) {
    return async (dispatch) => {

        //const {email, password} = values;

        try {
            dispatch(showLoader());

            //const data = await testRequest({ email, password }).then(res => res.data);
            const data = await testRequest().then(res => res.data);

            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: data,
            });

            dispatch(hideLoader());
            return data

        } catch (e) {
            dispatch(serverError(e));
        }
    };
}

/**
 * Logout
 */
export function logout() {
    return {
        type: types.LOGOUT,
    };
}

/**
 * Show alert
 */
export function showAlert(modalName, data) {
    return {
        type: types.SHOW_ALERT,
        payload: {
            modalName,
            data,
        },
    };
}

/**
 * Hide alert
 */
export function hideAlert() {
    return {
        type: types.HIDE_ALERT,
    };
}


/* ------------------------------- server events --------------------------------- */
/**
 * Server error
 */
export function serverError(error) {
    return showAlert(modalNames.SERVER_ERROR, (error && error.data.error) || error);
}

/**
 * Server success
 */
export function serverSuccess(data) {
    return showAlert(modalNames.SERVER_SUCCESS, data.data || data);
}

/* ------------------------------- / server events --------------------------------- */

/**
 * Load suggestions
 */
export function loadSuggestions() {
    return async (dispatch) => {

        try {
            dispatch(showLoader());

            const [friends, companies, products] = await Promise.all([
                fetchSuggestedFriends({per_page:"3"}).then(res => res.data.data).catch(e => e && e.data),
                fetchSuggestedCompanies({per_page:"3"}).then(res => res.data.data).catch(e => e && e.data),
                fetchSuggestedProducts({per_page:"2"}).then(res => res.data.data).catch(e => e && e.data),
            ]);

            dispatch({
                type: types.LOAD_SUGGESTIONS_SUCCESS,
                payload: {
                    friends,
                    companies,
                    products,
                },
            });

            dispatch(hideLoader());

        } catch (e) {
            dispatch(serverError(e));
        }
    };
}


/**
 * Load enquiry types
 */
export function loadEnquiryTypes() {
    return async (dispatch) => {

        try {
            dispatch(showLoader());

            const data = await fetchEnquiryTypes().then(res => res.data);

            dispatch({
                type: types.LOAD_ENQUIRY_TYPES_SUCCESS,
                payload: data,
            });

            dispatch(hideLoader());

        } catch (e) {
            dispatch(serverError(e));
        }
    };
}

/**
 * Post enquiry
 */
export function postEnquiry(values) {
    return async (dispatch) => {

        const {enquiry_type, other_enquiry_type} = supportFields;

        if (values[other_enquiry_type]) {
            // replace enquiry with other and delete other prop
            values = omit(
                {...values, [enquiry_type]: values[other_enquiry_type]},
                [other_enquiry_type]
            );
        }

        try {
            dispatch(showLoader());

            const data = await postToSupport(values).then(res => res.data);

            dispatch(serverSuccess(data));
            dispatch(hideLoader());
        } catch (e) {
            dispatch(serverError(e));
        }
    };
}

