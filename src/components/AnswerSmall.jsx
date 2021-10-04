import styled from "styled-components";

function AnswerSmall(props) {


    return (
        <Wrapper>
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

const AnswerImage = styled.img`
    width: 315px;
    cursor: pointer;
`;

export default AnswerSmall;