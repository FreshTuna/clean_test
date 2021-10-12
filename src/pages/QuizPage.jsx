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
import AnswerSmall from "../components/AnswerSmall";
import AnswerLarge from "../components/AnswerLarge";
import AnswerWithImage from "../components/AnswerWithImage";
import {DECISION, ENERGY, INFORMATION, LIFE_STYLE, MBTI_NUMBER} from "../common/constant";

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
    const [energy, setEnergy] = useState(0);
    const [information, setInformation] = useState(0);
    const [decision, setDecision] = useState(0);
    const [lifeStyle, setLifeStyle] = useState(0);
    const [componentOpacity, setComponentOpacity] = useState(0);

    const history = useHistory();

    useEffect( () => {


    }, []);

    const onStop = () => {
        SetIsStopped(!isStopped)
    };

    const onPause = () => {
        SetIsPaused(!isPaused)
    };

    const initMBTI = () => {
        let MBTI = "";

        if(energy > 0){
            MBTI += "E"
        } else {
            MBTI += "I"
        }

        if(information > 0){
            MBTI += "N"
        } else {
            MBTI += "S"
        }

        if(decision > 0){
            MBTI += "T"
        } else {
            MBTI += "F"
        }

        if(lifeStyle > 0){
            MBTI += "J"
        } else {
            MBTI += "P"
        }

        return MBTI;
    }

    useEffect( () => {
        setTimeout( () => {
            setComponentOpacity(1);
        }, 350)
    }, [questionNumber]);

    const answerHandler = (answer) => {
        if (ENERGY.includes(questionNumber)){
            setEnergy(energy + answer);
        }else if (INFORMATION.includes(questionNumber)){
            setInformation(information + answer);
        }else if (DECISION.includes(questionNumber)){
            setDecision( decision + answer);
        }else if (LIFE_STYLE.includes(questionNumber)){
            setLifeStyle(lifeStyle + answer);
        }

        setProgressFill(progressFill + 1);

        if (questionNumber == 12){
            const mbti = initMBTI()
            console.log(mbti);
            setLoading(true);
            console.log(MBTI_NUMBER[mbti])
            const mbtiId = MBTI_NUMBER[mbti].KEY

            setTimeout( () => {
                history.push({
                    pathname:`/result/${mbtiId}`,
                    state: {mbti: mbti}
                });
            }, 1000)
        } else {
            setComponentOpacity(0);
            setTimeout( () => {
                setQuestionNumber(questionNumber + 1);
            }, 250)

        }
    }

    return (
        <>
            <Wrapper>
                { !loading ?
                    <Container>
                        <ProgressBar fill={(progressFill/12) * 100} />
                        <Content opacity={componentOpacity}>
                            <QuestionTitleArea>
                                <QuestionNumber questionNumber={questionNumber} />
                                <QuestionContent questionNumber={questionNumber}/>
                            </QuestionTitleArea>
                            <QuestionAnswerArea>
                                { [].includes(questionNumber) &&
                                    <AnswerSmall questionNumber={questionNumber} answerHandler={answerHandler} />
                                }
                                { [1,2,3,4,5,6,7,8,9,10,11,12].includes(questionNumber) &&
                                    <AnswerWithImage questionNumber={questionNumber} answerHandler={answerHandler} />
                                }
                                {/*{questionNumber == 10 &&*/}
                                {/*    <AnswerLarge questionNumber={questionNumber} answerHandler={answerHandler} />*/}
                                {/*}*/}
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
    align-items:center;
    transition: opacity 0.2s;
    opacity: ${props => props.opacity};
`;

const QuestionTitleArea = styled.div`
    display: flex;
    width: 315px;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 56px;
`;

const QuestionAnswerArea = styled.div`
    width:100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 48px;
    align-items:center;
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