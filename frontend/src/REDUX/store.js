import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunkMiddleware from "redux-thunk";

// Action Types
import ACTION_TYPES from "./ActionType";

const defaultState = {
    logs: [
        {
            id: 1,
            startTime: "22/03/2022 06:01 AM",
            description: "Static Data 1",
            endTime: "22/03/2022 06:01 AM",
        },
        {
            id: 2,
            startTime: "22/03/2022 06:01 AM",
            description: "Static Data 2",
            endTime: "22/03/2022 06:01 AM",
        },
        {
            id: 3,
            startTime: "22/03/2022 06:01 AM",
            description: "Static Data 3",
            endTime: "22/03/2022 06:01 AM",
        },
        {
            id: 4,
            startTime: "22/03/2022 06:01 AM",
            description: "Static Data 4",
            endTime: "22/03/2022 06:01 AM",
        },
    ],
};

const rootReducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TYPES.STORE_ALL_LOGS:
            const { logs } = payload;
            return { ...state, logs };
        default:
            return state;
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunkMiddleware)));

export default store;

// export default createStore(rootReducer, applyMiddleware(ReduxThunkMiddleware));
