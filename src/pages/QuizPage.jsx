import {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Lottie from "react-lottie";
import Hoops from "../img/lottie/75839-jump-through-4-hoops.json";
import StartButton from "../components/StartButton";

const lottieOptions = {
    animationData: Hoops,
    loop: true,
    autoplay: true,
    rendererSettings: {
        className: 'add-class',
        preserveAspectRatio: 'xMidYMid slice'
    }
}

function QuizPage () {
    const [isStopped, SetIsStopped] = useState(false);
    const [isPaused, SetIsPaused] = useState(false);

    useEffect( () => {

    }, []);

    const onStop = () => {
        SetIsStopped(!isStopped)
    };

    const onPause = () => {
        SetIsPaused(!isPaused)
    };


    return (
        <>
            <Wrapper>
                <Container>
                    <Content>
                        <Lottie
                            options={lottieOptions}
                            isStopped={isStopped}
                            isPaused={isPaused}
                            isClickToPauseDisabled={false}
                            style={{width: "300px", height: "300px"}}
                        />
                        <LottieButton onClick={onPause}>Play/Pause</LottieButton>
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
    align-items: center;
`;

const LottieButton = styled.button`
    width: 30%;
    
`;

export default QuizPage;