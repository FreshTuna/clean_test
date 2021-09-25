import styled from "styled-components";

const {useEffect} = require("react");

function StartButton (props) {
    useEffect( () => {

    }, []);

    return (
        <Wrapper>
            <ButtonImg src={"/images/start_button@3x.png"} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

const ButtonImg = styled.img`
    width: 312px;
    height: 56px;
    cursor: pointer;
`;

export default StartButton;