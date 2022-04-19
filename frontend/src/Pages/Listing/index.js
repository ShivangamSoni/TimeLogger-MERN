// Material UI
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// Styled Components
import { Container, Info } from "./StyledComponents";

// Components
import ListItem from "../../Components/ListItem";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchLogs } from "../../REDUX/ActionCreator";

// Router
import { Link } from "react-router-dom";

const Listing = () => {
  const dispatch = useDispatch();
  const { logs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLogs());
  }, [dispatch]);

  return (
    <Container>
      {logs.length > 0 ? (
        <TableContainer component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No.</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>End Time</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {logs.map((item, index) => (
                <ListItem key={item.id} {...item} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Info>
          No Time Logs Available. Add Some <Link to="/">Here</Link>.
        </Info>
      )}
    </Container>
  );
};

export default Listing;
