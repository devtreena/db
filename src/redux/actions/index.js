import {createActions } from 'redux-actions';

export const getType = (ReduxActions) =>{
    return ReduxActions().type;
}

export const getPosts = createActions({
    getPostsRequest : undefined,
    getPostSuccess : ( payload) => payload,
    getPostFailure : (err) => err,
})