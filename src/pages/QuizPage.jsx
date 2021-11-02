import {useEffect, useState} from "react";
import styled from "styled-components";
import QuestionTitle from "../components/QuestionTitle";
import {useHistory} from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import AnswerWithImage from "../components/AnswerWithImage";
import {DECISION, ENERGY, INFORMATION, LIFE_STYLE, MBTI_NUMBER} from "../common/constant";

function QuizPage () {
    const [isStopped, SetIsStopped] = useState(false);
    const [isPaused, SetIsPaused] = useState(false);
    const [loading, setLoading] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
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
        }, 450)
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
            }, 1500)
        } else {
            setComponentOpacity(0);
            setTimeout( () => {
                setQuestionNumber(questionNumber + 1);
            }, 180);

        }
    }

    return (
        <>
            <Wrapper>
                { !loading ?
                    <Container>
                        <ProgressBar fill={(questionNumber/12) * 100} />
                        <Content opacity={componentOpacity}>
                            <QuestionTitleArea>
                                    <>
                                        <QuestionTitle questionNumber={questionNumber}/>
                                    </>
                            </QuestionTitleArea>
                            <QuestionAnswerArea>
                                <AnswerWithImage questionNumber={questionNumber} answerHandler={answerHandler} />
                            </QuestionAnswerArea>
                        </Content>
                    </Container>
                    :
                    <LoadingContainer>
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
    background-color: #FBF9F4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/result_loading.webp');
    background-repeat : no-repeat;
    background-size : cover;
`;

const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    transition: opacity 0.15s;
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
    margin-top: 30px;
    align-items:center;
`;

export default QuizPage;