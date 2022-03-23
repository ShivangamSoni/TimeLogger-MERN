import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunkMiddleware from "redux-thunk";

// Action Types
import ACTION_TYPES from "./ActionType";

const defaultState = {
    logs: [],
    notification: { enabled: false, content: "" },
};

const rootReducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TYPES.STORE_ALL_LOGS:
            return { ...state, logs: payload };
        case ACTION_TYPES.SET_NOTIFICATION:
            return { ...state, notification: payload };
        default:
            return state;
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunkMiddleware)));

export default store;

// export default createStore(rootReducer, applyMiddleware(ReduxThunkMiddleware));
