// Styled Components
import { Container } from "./StyledComponents";

import ListItem from "../../Components/ListItem";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchLogs } from "../../REDUX/ActionCreator";

const Listing = () => {
    const dispatch = useDispatch();
    const { logs } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchLogs());
    }, [dispatch]);

    return (
        <Container>
            {logs.map(({ id, ...item }) => (
                <ListItem key={id} {...item} />
            ))}
        </Container>
    );
};

export default Listing;
