// Initial State
import { initialState } from './initial';
import { ActionTypes } from '../constants/';

const call = (state = initialState.call, action) => {
    switch (action.type) {
        case ActionTypes.SHOWMODALCALL: {
            return {
                ...state,
                showModal: action.showModal,
            }
        }
        case ActionTypes.SETDATACALL: {
            return {
                ...state,
                setDataCall: action.setDataCall,
            }
        }
        // Default
        default: {
            return state;
        }
    }

}

// Exports
export default call;