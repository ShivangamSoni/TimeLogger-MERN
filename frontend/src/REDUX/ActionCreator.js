import axios from "axios";
import ACTION_TYPES from "./ActionType";

const BASE_URL = "http://localhost:5000/";

export const fetchLogs = () => {
    return async (dispatch) => {
        const url = `${BASE_URL}/api/v1/logs`;

        try {
            const data = await axios.get(url);

            if (Array.isArray(data)) {
                dispatch({ type: ACTION_TYPES.STORE_ALL_LOGS, payload: data });
            }
        } catch (error) {
            console.error("Error in fetchLogs: " + error);
        }
    };
};
