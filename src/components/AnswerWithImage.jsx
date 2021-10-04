import styled from "styled-components";

function AnswerWithImage(props) {


    return (
        <Wrapper>
            <QuestionImage src={`/images/questions/question_${props.questionNumber}_image@3x.png`} />
            <AnswerImage src={`/images/answers/answer_${props.questionNumber}_up@3x.png`} onClick={() => props.answerHandler(1)}/>
            <div style={{marginBottom:"12px"}} />
            <AnswerImage src={`/images/answers/answer_${props.questionNumber}_down@3x.png`} onClick={() => props.answerHandler(-1)} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

const QuestionImage = styled.img`
    width: 100%;
    margin-bottom: 35px;
`;

const AnswerImage = styled.img`
    width: 315px;
    margin: 0 auto;
    cursor: pointer;
`;

export default AnswerWithImage;