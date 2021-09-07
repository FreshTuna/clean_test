import styled from "styled-components";

const {useEffect} = require("react");

function StartButton (props) {
    useEffect( () => {

    }, []);

    return (
        <Wrapper>
            <ButtonText>
                {props.text}
            </ButtonText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 26rem;
    height: 6rem;
    border: 2px solid powderblue;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    margin: 0 auto;
`;

const ButtonText = styled.p`
    color: powderblue;
    font-size: 1.5rem;
    text-align: center;
`;

export default StartButton;