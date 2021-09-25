import styled from "styled-components";

function QuestionContent (props) {
    return (
        <>
            <QuestionText src={`/images/question_content${props.questionNumber}@3x.png`} />
        </>
    )
}

const QuestionText = styled.img`
    height: 56px;
`;

export default QuestionContent;
