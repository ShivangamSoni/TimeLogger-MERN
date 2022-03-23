// Styled Components
import { Container, Text, Close } from "./StyledComponents";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../../REDUX/ActionCreator";

const Notification = () => {
    const dispatch = useDispatch();
    const { enabled, content } = useSelector((state) => state.notification);

    const close = () => dispatch(hideNotification());

    return (
        <Container className={`${!enabled && "hide"}`}>
            <Text>{content}</Text>
            <Close onClick={close}>X</Close>
        </Container>
    );
};

export default Notification;
