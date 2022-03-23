// Styled Components
import { Container, Desc, TimeWrapper, Time, Title, Value } from "./StyledComponents";

const ListItem = ({ startTime, description, endTime }) => {
    return (
        <Container>
            <Desc>{description}</Desc>
            <TimeWrapper>
                <Time align="left">
                    <Title>Start</Title>
                    <Value>{new Date(startTime).toLocaleString()}</Value>
                </Time>
                <Time align="right">
                    <Title>End</Title>
                    <Value>{new Date(endTime).toLocaleString()}</Value>
                </Time>
            </TimeWrapper>
        </Container>
    );
};

export default ListItem;
