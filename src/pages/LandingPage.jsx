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
                        <LandingTitle src={"/images/landing_title@3x.png"} />
                        <LandingSubTitle src={"/images/landing_sub_title@3x.png"} />
                        <LandingMainImage src={"/images/landing_main@3x.png"} />
                        <Link to={"/quiz"} style={{ textDecoration: 'none', width: "auto" }}>
                            <StartButton  />
                        </Link>
                    </Content>
                </Container>
            </Wrapper>
        </>
    )
};


const Wrapper = styled.section`
    max-width: 500px;
    margin: 0 auto;
    overflow: hidden;
    touch-action: none;
`;

const Container = styled.div`
   width: 100%;
   height: 100vh;
   background-color: #FBF9F4;
   display: flex;
   flex-direction: column;
   font-family: "Sandoll GothicNeo3"
   font-size: 15px;
   font-weight: 400;
   font-align: center;
   align-items: center;
`;

const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;

const LandingTitle = styled.img`
    width: 254px;
    margin-bottom: 12px;
`;

const LandingSubTitle = styled.img`
    width: 265px;
    margin-bottom: 63px;
`;

const LandingMainImage = styled.img`
    width: 265px;
`;

export default LandingPage;