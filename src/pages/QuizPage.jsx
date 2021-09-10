import {useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import StartButton from "../components/StartButton";

function QuizPage () {
    useEffect( () => {

    }, []);

    return (
        <>
            <Wrapper>
                <Container>
                    <Content>
                        <StartButton text={"감사합니다"} />
                    </Content>
                </Container>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
   width: ${({ theme }) => theme.deviceSizes.mobileL};
   height: 100vh;
   background-color: white;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

const Content = styled.div`
    height: 600px;
    width: 100%;
    border: 2px solid #F4D19B;
    border-radius: 8px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default QuizPage;