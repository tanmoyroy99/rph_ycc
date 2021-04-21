import { combineReducers } from 'redux';
import { STUDENT_HEADER, STUDENT_LIST } from '../action'
// import studentHeaderData  from './../data/studentHeader.json' 

function studentHeader(state=[], action){
    switch(action.type){
        case STUDENT_HEADER:
            return action.items;
        default:
            return state;
    }
}

function studentList(state=[], action){
    switch(action.type){
        case STUDENT_LIST:
            return [...state, action.items];
        default:
            return state;
    }
}

export default combineReducers({studentHeader, studentList})