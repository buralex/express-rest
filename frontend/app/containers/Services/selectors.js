
import {createSelector} from 'reselect';
import {initialState} from './reducers';

export const selectServices = state => state.services || {};

export const makeSelectCategories = () => createSelector(selectServices, services => services.list.categories);
