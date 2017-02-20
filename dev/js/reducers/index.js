import {combineReducers} from 'Redux';
import UsersReducer from './reducer-users';
import MoviesReducer from './reducer-movies';

const allReducers = combineReducers(
    {
        users: UsersReducer,
        movies: MoviesReducer
    }
);

export default allReducers;

 