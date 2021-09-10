import {useEffect} from "react";
import styled from "styled-components";
import StartButton from "../components/StartButton";
import {Link} from "react-router-dom";

function LandingPage () {
    useEffect( () => {

    }, []);

    return (
        <>
            <Wrapper>
                <Container>
                    <Content>
                        <Link to={"/quiz"} style={{ textDecoration: 'none' }}>
                            <StartButton text={"안녕하세요"} />
                        </Link>
                    </Content>
                </Container>
            </Wrapper>
        </>
    )
};

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
    border: 2px solid #E7EAB5;
    border-radius: 8px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default LandingPage;