import styled from "styled-components";

function QuestionContent (props) {
    return (
        <>
            <QuestionText src={`/images/questions/question_${props.questionNumber}_text@3x.png`} />
        </>
    )
}

const QuestionText = styled.img`
    width: 282px;
`;

export default QuestionContent;
