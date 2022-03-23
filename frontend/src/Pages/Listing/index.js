// Styled Components
import { Container, Info } from "./StyledComponents";

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
                logs.map(({ id, ...item }) => <ListItem key={id} {...item} />)
            ) : (
                <Info>
                    No Time Logs Available. Add Some <Link to="/">Here</Link>.
                </Info>
            )}
        </Container>
    );
};

export default Listing;
