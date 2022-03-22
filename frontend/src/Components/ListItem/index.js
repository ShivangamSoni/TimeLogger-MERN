// Styled Components
import { Container, Desc, TimeWrapper, Time, Title, Value } from "./StyledComponents";

const ListItem = ({ startTime, description, endTime }) => {
    return (
        <Container>
            <Desc>{description}</Desc>
            <TimeWrapper>
                <Time align="left">
                    <Title>Start</Title>
                    <Value>{startTime}</Value>
                </Time>
                <Time align="right">
                    <Title>End</Title>
                    <Value>{endTime}</Value>
                </Time>
            </TimeWrapper>
        </Container>
    );
};

export default ListItem;
