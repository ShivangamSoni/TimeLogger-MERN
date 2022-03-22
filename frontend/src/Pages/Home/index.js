// Styled Components
import { Container, Form, Button } from "./StyledComponents";

// Material UI
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from "@mui/lab/DateTimePicker";

// React
import { useState } from "react";

// Axios
// import axios from "axios";

const Home = () => {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [desc, setDesc] = useState("");

    const handleDescChange = (event) => setDesc(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // try {
        //     const url = "";
        //     const data = await axios.post(url);
        // } catch (error) {
        //     console.error("Error", error);
        // }
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
                        renderInput={(params) => <TextField {...params} required disabled />}
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
                        renderInput={(params) => <TextField {...params} required disabled />}
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
