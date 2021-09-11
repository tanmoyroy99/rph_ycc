import {combineReducers } from 'redux';
import { URL_INVENTORY_HEADER, URL_INVENTORY_DATA } from '../action';
import urlinventoryHeader from './../defaultJSON/urlinventoryHeader.json'
import urlinventoryData from './../defaultJSON/urlinventoryData.json';


function inventoryHeader(state=urlinventoryHeader, action){
    switch(action.type){
        case URL_INVENTORY_HEADER:
            return action.data;
        default:
            return state;
    }
}
function inventoryData(state=urlinventoryData, action){
    switch(action.type){
        case URL_INVENTORY_DATA:
            return action.data;
        default:
            return state;
    }
}

export default combineReducers({inventoryHeader, inventoryData})