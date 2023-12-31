import { APP_ACTIONS } from "./actions";

function getInitialState() {
    return {
        selectedJob: null
    }
}

const INITIAL_STATE = getInitialState();

const state2actionMapping = {
    [APP_ACTIONS.APP_FILTER_EMPLOYEES]: (state, action) => {
        return {
            ...state,
            selectedJob: action.payload
        };
    }
}

const appReducer = (state = INITIAL_STATE, action) => {
    return state2actionMapping[action.type] && action.payload !== undefined ? state2actionMapping[action.type](state, action) : state;
}

export default appReducer;