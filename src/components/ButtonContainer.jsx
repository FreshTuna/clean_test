import {useEffect} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

function ButtonContainer () {

    const history = useHistory();
    useEffect( () => {

    }, []);

    const restartTest = () => {
        history.push('/');
    }

    return (
        <Wrapper>
            <ShareButtonContainer>
                <ShareButton src={"/images/share_btn@3x.png"} />
                <ShareButton src={"/images/copylink_btn@3x.png"} />
            </ShareButtonContainer>
            <RestartButton src={"/images/re_test_btn@3x.png"} onClick={restartTest} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ShareButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 312px;
    margin-top: 32px;
    margin-bottom: 12px;
`;

const RestartButton = styled.img`
    width: 312px;
    cursor: pointer;
`;

const ShareButton = styled.img`
    width: 150px;
    cursor: pointer;
`;

export default ButtonContainer;