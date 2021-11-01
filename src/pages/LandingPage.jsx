import {useEffect, useState} from "react";
import styled from "styled-components";
import StartButton from "../components/StartButton";
import {Link, useHistory} from "react-router-dom";
import Lottie from "react-lottie";
import Fairies from "../img/lottie/fairy_lottie.json";
import {NUMBER_MBTI, SHARE_FAIRY_TITLE} from "../common/constant";
import {Helmet} from "react-helmet";

function LandingPage () {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect( () => {

    }, []);

    const toQuiz = () => {
        history.push('/quiz');
    }

    const lottieOptions = {
        animationData: Fairies,
        loop: true,
        autoplay: true,
        rendererSettings: {
            className: 'add-class',
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <>
            <Wrapper>
                    <Container>
                        <Content>
                            <LandingTitle src={"/images/landing_title@3x.png"}/>
                            <LandingSubTitle src={"/images/landing_sub_title@3x.png"}/>
                            <Lottie
                                options={lottieOptions}
                                isClickToPauseDisabled={false}
                                style={{width: "360px", height: "280px", marginBottom: "15px"}}

                            />

                            <StartButton click={toQuiz}/>
                            <LifeLabIcon src={"/images/lifelab_icon@3x.png"}/>
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

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #00BED6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const LoadingFairyImage = styled.img`
    width: 110px;
`;

const LifeLabIcon = styled.img`
    width: 75px;
    margin-top: 9px;
`;

export default LandingPage;