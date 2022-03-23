import axios from "axios";
import ACTION_TYPES from "./ActionType";

const { REACT_APP_BASE_URL } = process.env;

export const fetchLogs = () => {
    return async (dispatch) => {
        const url = `${REACT_APP_BASE_URL}/api/v1/logs`;

        try {
            const {
                data: { logs },
            } = await axios.get(url);

            if (Array.isArray(logs)) {
                dispatch({ type: ACTION_TYPES.STORE_ALL_LOGS, payload: logs });
            }
        } catch (error) {
            console.error("Error in fetchLogs: " + error);
        }
    };
};

export const showNotification = (content) => {
    const payload = { enabled: true, content };
    return { type: ACTION_TYPES.SET_NOTIFICATION, payload };
};

export const hideNotification = (content) => {
    const payload = { enabled: false, content: "" };
    return { type: ACTION_TYPES.SET_NOTIFICATION, payload };
};
