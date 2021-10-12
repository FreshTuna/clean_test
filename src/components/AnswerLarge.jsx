import styled from "styled-components";

function AnswerLarge(props) {


    return (
        <Wrapper>
            <AnswerImage src={`/images/answers/answer_${props.questionNumber}_left@3x.png`} onClick={() => props.answerHandler(1)}/>
            <div style={{width:"19px"}} />
            <AnswerImage src={`/images/answers/answer_${props.questionNumber}_right@3x.png`} onClick={() => props.answerHandler(-1)} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const QuestionPlusImage = styled.img`
    width: 100%;
`;

const AnswerImage = styled.img`
    width: 135px;
    cursor: pointer;
`;

export default AnswerLarge;