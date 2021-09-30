import {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Lottie from "react-lottie";
import Hoops from "../img/lottie/75839-jump-through-4-hoops.json";
import StartButton from "../components/StartButton";
import QuestionNumber from "../components/QuestionNumber";
import QuestionContent from "../components/QuestionContent";
import QuestionImage from "../components/QuestionImage";
import {useHistory} from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

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
    const [loading, setLoading] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [progressFill, setProgressFill] = useState(1);

    const history = useHistory();

    useEffect( () => {

    }, []);

    const onStop = () => {
        SetIsStopped(!isStopped)
    };

    const onPause = () => {
        SetIsPaused(!isPaused)
    };

    const toResult = () => {
        setLoading(true);
        setTimeout( () => {

            history.push('/result/1');
        }, 1000)
    }

    const onClickAnswer = () => {
        console.log(progressFill);
        if(progressFill !=12) {
            setProgressFill(progressFill + 1);
        }
        else{
            toResult()
        }
    }

    return (
        <>
            <Wrapper>
                { !loading ?
                    <Container>
                        <ProgressBar fill={(progressFill/12) * 100} />
                        <Content>
                            <QuestionTitleArea>
                                <QuestionNumber questionNumber={questionNumber} />
                                <QuestionContent questionNumber={questionNumber} />
                            </QuestionTitleArea>
                            <QuestionImage questionNumber={questionNumber} />
                            <QuestionAnswerArea>
                                {/*<Link to={"/result/1"} style={{ textDecoration: 'none', width: "auto", marginBottom:"12px" }}>*/}
                                {/*    <YesButton src={"/images/question_yes@3x.png"} />*/}
                                {/*</Link>*/}
                                {/*<NoButton src={"/images/question_no@3x.png"} onClick={toResult}/>*/}
                                <YesButton src={"/images/question_yes@3x.png"} onClick={onClickAnswer} />
                                <div style={{marginBottom:"12px"}} />
                                <NoButton src={"/images/question_no@3x.png"} onClick={onClickAnswer}/>
                            </QuestionAnswerArea>
                            {/*<Lottie*/}
                            {/*    options={lottieOptions}*/}
                            {/*    isStopped={isStopped}*/}
                            {/*    isPaused={isPaused}*/}
                            {/*    isClickToPauseDisabled={false}*/}
                            {/*    style={{width: "300px", height: "300px"}}*/}
                            {/*/>*/}
                            {/*<LottieButton onClick={onPause}>Play/Pause</LottieButton>*/}
                        </Content>
                    </Container>
                    :
                    <LoadingContainer>
                        <LoadingFairyImage src={"/images/loading_fairy@3x.png"}/>
                    </LoadingContainer>
                }
            </Wrapper>
        </>
    )
}

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

const QuestionTitleArea = styled.div`
    display: flex;
    width: 315px;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 36px;
`;

const QuestionAnswerArea = styled.div`
    width:315px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 35px;
`;

const YesButton = styled.img`
    width: 315px;
    cursor: pointer;
`;

const NoButton = styled.img`
    width: 315px;
    cursor: pointer;
`;

const LottieButton = styled.button`
    width: 30%;
`;

const LoadingFairyImage = styled.img`
    width: 250px;
`;

export default QuizPage;