// Styled Components
import { Container, Form, Button } from "./StyledComponents";

// Material UI
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from "@mui/lab/DateTimePicker";

// React
import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";

// Axios
import axios from "axios";
import { showNotification, hideNotification } from "../../REDUX/ActionCreator";

const Home = () => {
    const dispatch = useDispatch();
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [desc, setDesc] = useState("");

    const handleDescChange = (event) => setDesc(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!desc || !startTime || !endTime) {
            dispatch(showNotification("All Fields are Required"));
            setTimeout(() => dispatch(hideNotification()), 3000);
            return;
        }

        const log = { desc, startTime, endTime };

        const { REACT_APP_BASE_URL } = process.env;

        try {
            const url = `${REACT_APP_BASE_URL}/api/v1/logs/`;
            const { data } = await axios.post(url, log, { headers: { "Content-Type": "application/json" } });

            if (data.success) {
                setDesc("");
                setStartTime(null);
                setEndTime(null);
                dispatch(showNotification("Log Added!!"));
                setTimeout(() => dispatch(hideNotification()), 3000);
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <Container>
            <Form>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateTimePicker
                        value={startTime}
                        onChange={(newValue) => {
                            setStartTime(newValue);
                        }}
                        label="Start Date Time"
                        renderInput={(params) => <TextField {...params} required />}
                    />
                </LocalizationProvider>

                <TextField label="Description" variant="outlined" required multiline maxRows={5} value={desc} onChange={handleDescChange} />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateTimePicker
                        value={endTime}
                        onChange={(newValue) => {
                            setEndTime(newValue);
                        }}
                        label="End Date Time"
                        renderInput={(params) => <TextField {...params} required />}
                    />
                </LocalizationProvider>

                <Button type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Home;
