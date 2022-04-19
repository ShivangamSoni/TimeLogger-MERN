// Material UI
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// Redux
import { useDispatch } from "react-redux";

// Axios
import axios from "axios";
import { fetchLogs, hideNotification, showNotification } from "../../REDUX/ActionCreator";

const ListItem = ({ id, startTime, description, endTime, index }) => {
  const dispatch = useDispatch();

  const deleteEntry = async () => {
    const { REACT_APP_BASE_URL } = process.env;
    const url = `${REACT_APP_BASE_URL}/api/v1/logs/${id}`;

    try {
      const { data } = await axios.delete(url);

      console.log(data);

      if (data.success) {
        dispatch(showNotification("Log Deleted Successfully!!"));
        setTimeout(() => dispatch(hideNotification()), 3000);
        dispatch(fetchLogs());
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{new Date(startTime).toLocaleString()}</TableCell>
      <TableCell>{new Date(endTime).toLocaleString()}</TableCell>
      <TableCell>
        <Button onClick={deleteEntry}>
          <DeleteForeverIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ListItem;
